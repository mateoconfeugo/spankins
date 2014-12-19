spankins
========

Continuous Integration/Delivery/Deployment Domain Specific Language (DSL) runnning in the context of a forked github webapp server project.

**Contents**

* [Overview](#overview)
* [Installation](#installation)
* [Motivation?](#motivation)
* [DSL](#dsl)
* [Explanation?](#explanation)
* [Deep Code Walking Macros](#dcwm)
* [Reading](#reading)
* [Terminology](#terminology)

<a name="overview">
## Overview

Example of a DSL to perform a dev-ops type task:

This particular task upon a commit to a branch in git hub create an uberjar and deploy the uberjar emailing and creating the neccessary reports.

```clojure
(ns my.ns
  (:require [spankins.core :refer :all]))


  (def ci-spec (job
                (parameters :commit :release)
                (scm :git (:commit parameters))
                (build
                 (step
                     (>! monitor "compiling app")
                     (pprint "lein compile"))
                 (step (pprint "lein test"))
                 (step (pprint "lein uberjar"))
                 (step (pprint "lein deploy private"))
                 (step (pprint "lien pallet up")))
                 (publishers
                   (publish (email "a@b.com"))
                   (publish (report
                               (let [results (<! build-results)]
                                 create-report))))))
```

<a name="installation">
## Installation
```
[spankins "0.1.0"]
```

<a name="motivation">
## Motivation
  largerly an out growth of frustration using jenkins:

  - very general purpose; therefore, heavy to do lightweight tasks
  - difficult to version control the server side of jenkins
  - jenkins is largerly defined by your set of plug ins.
  - The dirty secret is jenkins writes to a file and shells out to that ...weak!
  -. less control of most things plugins offer then using the api's directly
  - Its not a simple to understand program
  - So many steps
  - difficult for developers to run on their own.
  - We should be simplifing the process not adding to the complexity
  - Command line tools are slow and limited.

  The hope of all this is
  - Simple to understand continuous integration program that is flexibly and easy to maintain and understand
  - Lightweight -  okay,  its running on the jvm but compared to a typical jenkins install with all its plugins
  - Very fast compared to anything.
  - Easy to make new job types out of function graphs and easy to customize these types.
  - Everything in one language clojure versus jenkins java, jelly, xml, groovy
  - Plugins are just functions/graphs
  - Debuggable/REPL I use cider
  - Work on interactively
  - Handle very high concurrent load
  - A living piece of software that you improve and customize but there is no magic places.
  - A versionable, rollbackable configuration system.

Things to note.
  * hierarchy of composable maps results in a customized "jenkins job"
  * cascading hierarcies achieved using multimethods

## Parts of the Solution
=======
  The control level of the software uses channel operation fuctions.

## Terms


### Server
* Server doesn't do any job specific stuff all of that is left to the invoked compiled function graphs (ICFG).  Similar to jenkins and its plugins
* The jenkins server deals with the passing around and management of the channls (i.e. the control logic)
* Running the job functions from a pallet group spec can allow each job to be easily run in its own docker container
* "Jenkins" server stuff is mainly built using core.async core.match  function graph and pallet if necessary

  So how do this work
  - Developer check in code and triggers a hook
  - The commit hash is sent via the hook to a rest api
  - The "jenkins"-lite server takes this commit and project and builds a function graph
  - the function graph is sent into the dispatch channel
  - The dispatcher receives the function graph and hooks it up to a new output channel forming a tuple
  - This tuple is passed to the processing channel
  - The processing channel runs the function graph in a seperate thread
  - Upon returning the function graphs results are sent to the output results channel
  - The "jenkins"-lite server takes these results and

### How do you uses this?

One of the central ideas of this approach is that a use of this program forks this projects and ads there changes as adaptations to the code.   This way there aren't any plugins just include the library in the project dependencies and use it as you see fit.  The point of the DSL is that it is runable code and can be part of an application. This application is for managing your infrastructure.

<a name="dsl">
# DSL

A set of composable macros that build out the stages of the jobs workflow and in the end create a job graph


## Job Graph
A job is a combination of a channels hooked up together in a workflow via a function graph.

* selecting a branch
* cloning git repo
* compiling
* triggering other builds
* unit testing
* component testing
* acceptance testing
* generating reports
* deploying applications
* emailing/messaging/storing results

  Each of these stages can be implemented in a go block and perhaps within a  while loop that will terminate
  as a result of completing an action or receiving a control message from a channel or a channel closing.

The building of a jenkins job as invoking a compiled job graph function
Channels are some of the things returned from function call.
These channels are used to communicate with job.

Provides a lightweight framework within which you place no extra technology just a simple extendable distributed programs for running the relivant commands in the right environment  since each step relies on the previous results we can use a function graph.  Viewing the building of a jenkins job as function graph calling of a compiled function graph provides a lightweight framework within which you place your various jenkins type activities.


* The raw job can passed to and returned from functions and channels
* The job graphs return immediately when the compiled function is called.
* All the synchronization of the build work flow a job specifies is done through channels.
* Communication  between stages happens via the channels.
* The job graph keys may be channels, maps of channels or any other clojure data structure.


  The function returns almost immediately; however, within on function calls multiple
  go routines may have been started and are running.

  Interacting with these running jobs is accomplished by sending and recieving messages via
  the channels returned from the function call.

Instead of using a complicated mix of plugins we try to use clojure libraries and mechanisms in the
language itself to replicate the functionality of jenkins.


## Usage

One of the nice things is that when you build a job by invoking the compiled function graph is that it returns almost immediately.

We need to define what happens where:

* In the job, channels are used to pass information between the different stages a job has through out its life cycle to coordinate the synchronization of sequential operation.

*  In the server infromation about the jobs is sent to centralized location.

*  Since a job is represented as a clojure map of defnk type functions  we can easily move this around to different workers
   that then get compiled and run in the containing environment

* A compiled graph function when run is a complete state machine transforming in a series of well defined steps an artifact into anothor artifact or action result.

* The server upon when distributing work dispatches the job along with a channel that streams the job information back to the server.

  ## How the DSL works

  The audience for this DSL is devops engineers who need to create
  complex automated asynchronous workflows comprising of many tasks.

  Often devops tasks take a lot of time with many parts. Most of the time is spent
  setting up environments, compiling and moving data around - the
  actual logic that sets these things in motion is fairly small and
  executes quickly.

  This continuous itegration/delivery job macro set simplifies the process
  of writing asynchronous ci related tasks by providing  a customized language.
  devops engineers can check this in and use it with other code.

  Extending the clojure language allows ci related tasks to be
  integrated into the rest of the infrastructure orchastration as needed.
  There is no need for a centralized server although this is possible if that
  is what is desire (usually it is)

  The extendsions to the language to create the dsl using macros<1>,
  function graphs <3A,B> go routines and channels<1>

  LAYERS in DSL-driven system.

  ```

  ----------------------------------------------------------------------
   <6>                         Domain Specific code
  ----------------------------------------------------------------------
   <5>                         Runtime for DSL code
  ----------------------------------------------------------------------
   <4>       Higher-level entities   - A: data and B: control
  ----------------------------------------------------------------------
   <3> A: Domain-specific data structures | B: Domain-specific control structures
  ----------------------------------------------------------------------
   <2>                    Low-lev domain primitives
  ----------------------------------------------------------------------
   <1>                          Clojure
  ----------------------------------------------------------------------
  ```

  The dsl spec <6> creates a workflow function <4>
  This function, when invoked will create an instance of a set of
  communicating sequential processes that implement the asynchronous workflow  <5>.
  The communication sequeantial processes are implemented using channels and go routines <1>.

  The worflow function <4> is non-blocking and returns the running job <5> immediately in the form of a map <3>
  This map <3> has keys some which are properties others which are channels.
  The workflow communicates with its environment via these channels

  The as the workflow job progresses it passes messages
  These messages <3A> contain data and sometimes channels

  Along with expanding out all the pieces of user supplied dsl, the job macro
  inserts a dispatcher <3B> that handles all the control logic.

  The dispatcher <3B> stitches together the auxliary channel handling with the user
  specified dsl forms<2>



  ----------------------------------------------------------------------
   <6> Domain Specific code
   ```clojure
       (job :some-job
            (build
               (step  (>! $monitor  {:message :ping}))))
   ```
  ----------------------------------------------------------------------
   <5> Runtime for DSL code:
   (def job-obj (new-some-job {:settings nil}))
   (def run-results (build job-object parameters))

  ----------------------------------------------------------------------
   <4>       Higher-level entities   - A: data and B: control
   ```clojure
    (def job-graph {:parameters (fnk [commit-hash] {:commit comit-hash})
                    :input (chan)
                    :output (chan)
                    :error (chan)
    ```

     There need to be some rules that reflect the causal nature of reality.
     scm releated activies must preceed build activies that must preceed publish
     process.
     These things are inherent in a sequential workflow process.

     This is a degenerate case; however, with channels it is possible to introduce
     feedback into this system such that up building and having the build step fail
     it could prompt the scm sequence task to run again if there is a new version of
     release next and try to continue the build from there.

  ----------------------------------------------------------------------
   <3> A: Domain-specific data structures | B: Domain-specific control structures

    The job is a set of tasks executed in sequence, each part in the sequence
    is realized by a (fnk[] (go (while true (do ~@stuff))))  lets call them
    fnking go do stuff functions (FGDSF) type connected
    to a map key.  This map  will yield a set of channels for the sequence

    ```clojure
    {:input in
     :output out
     :error error}
     ```

     So this what each of the fnking go do stuff functions runs an endless
    loop hosted in a go routine but the function returns immediately a map
    of three channels

    The parameters that can be passed into a build of a job are described as vector of keyworks
    (parameters [:commit-hash :time :use-spot-instance?])

    Intermediate data structure:
    This is what gets generated as the DSL is walked.  It is from this that the function graphs
    is constructed.

    ```
    (def materials {:in (chan)
     :out (chan)
     :error (chan)
     :monitor (chan)
     :parameters [:commit-hash :time :use-spot-instance?]
     :properties [:environment]
     :build {:steps [...]}
     :publisher [...]})

    (def job-spec-graph (build-job-graph materials))
    ```

   B:
    Message Package [:event-token {:message }]
    This gets put into and taken from channels

   The dispatcher gets the message package along with channel that sent
   the message.

   Channels are used to route the data between the different workflow
   processes (go routines).

   The message package's event token is what will trigger the dispatch
   routing.

   These go routines are started when the compiled function graph is run
   each of these functions will run listening to its input channels and
   returning the the results of its processing into the output

   Fking go do stuff  for a while functions:

   This is where the magic offered by the dsl is realized.

  ----------------------------------------------------------------------
   <2>                    Low-lev domain primitives
    core.async - channels, go routines
    plumbing.graph - dnk, function graphs
    core.match - dispatch table

  ----------------------------------------------------------------------
   <1>                          Clojure
   Actual code of doing the task.  Everything else is convience and idomatic
   easy of passing data and control to the appropriate sequence.


  ----------------------------------------------------------------------
<a name="explanation>
## Explanation

  Lisp is a local maximum in the space of programming languages, because it can do arbitary code transformation
  of clojure code using clojure itself.

  The idea is not that lisps are the right language for any particular problem but that
  clojure encorages solving problems by creating new micro languages tailored to solve that problem<6>

  This approach allow us to not only solve the immediate problem we started out to solve but also
  with a whole class of problems in that domain.

  This approach creates Meta linquistic abstractions - the approach of creating a domain specific language
  that's then used to solve the problem at hand.

  The hope is that this leaves us with a system that is highly flexibly and maintainable while staying
  small and eaier to understand and debug

  Clojure macros help presenting abstractions as a convenient feture of the language (bottom up driven development).
  A DSL wraps domain abstractions in a layer of language.

  What gets created at the end of such a bottom up process is a rich set of primativess,<2>
  opertors, and forms for combinations that closely models the business domain<6>

  To do the needful when creating a DSL we must look not only at top-level expression,<4><3><2>
  but also at all the internal expression forms

  The output of the job macro is as a clojure map of defnk type functions <3A,B>.
  This is easily moved this around to different workers that then get compiled and run in the containing environment.

  The job dsl is a set of deep walking macros. It doesn't just evaluate its top level form
  but descends into its children and keeps going deeper.

  in order to cover all the different cases we want to be able to have our job work for things besides
  defn as well: do, fn, let, loop, when, letfn are places it makes sense to have our job in place.

  <a name="dcwm">
  ### Background DEEP CODE WALKING MACRO TECHNIQUES:

  Abstract Syntax Tree.
  This pattern is to read forms into a map of nested clojure data structures
  do some transforms on that structure and spit out forms generated from the data.
  Reads in the form into a staging type data structure, do the transforms on the  data structure of forms,  and
  create clojure code from transform

    Additive transformations:
  This type of macro takes an expression and augmented it with additional stuff
  in a particular fashion creating some data structure/form/verb

  In place transformations:
  Transform the expression as it’s traversed

  We will use all three
  <1> Parses the form into an abstract syntax tree [channel, map, symbol]
  <2> Take the AST and organize it into a function graph that connects the
      channels together in a ci build workflow.
  <3> Transforming reads/writes to channels into the [:token {:message {}}]
      format.

  Seperating the process of converting the dsl into two teps allows the parameters,
  intialization data and auxliary channels [monitor log input error output] to be
  created at the beginning of the function graph thus available to subsequent steps
  that will be responding to input at run time.

  The job builder modules are executed in sequence.

  Generally the sequence is:
  parameters/properties
  scm
  triggers
  wrappers
  prebuilders (lein only, configured like Builders)
  builders (maven, freestyle, matrix, etc..)
  postbuilders (maven only, configured like Builders)
  publishers/reporters/notifications

=======

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
