# spankins

A jenkins inspired continuous integration


* Why?
  some of the problems with jenkins:

  1. very general purpose; therefore, heavy to do lightweight tasks
  2. difficult to version control the server side of jenkins
  3. jenkins is largerly defined by your set of plug ins.
  4. The dirty secret is jenkins writes to a file and shells out to that ...weak!
  5. less control of most things plugins offer then using the api's directly
  6. Its not a simple to understand program
  7. So many steps
  8. difficult for developers to run on their own.
  9. We should be simplifing the process not adding to the complexity

  The hope of all this is
  1. Simple to understand continuous integration program that is flexibly and easy to maintain and understand
  2. Lightweight -  okay,  its running on the jvm but compared to a typical jenkins install with all its plugins
  3. Very fast compared to anything.
  4. Easy to make new job types out of function graphs and easy to customize these types.
  5. Everything in one language clojure versus jenkins java, jelly, xml, groovy
  6. Plugins are just functions/graphs
  7. Debuggable
  8. Work on interactively
  9. Handle very high concurrent load


  Things to note.


  * hierarchy of composable maps results in a customized "jenkins job"
  * cascading hierarcies achieved using multimethods




  The control level of the software uses channel operation fuctions.
  
## Terms  

### Server
* Server doesn't do any job specific stuff all of that is left to the invoked compiled function graphs (ICFG).  Similar to jenkins and its plugins
* The jenkins server deals with the passing around and management of the channls (i.e. the control logic)
* Running the job functions from a pallet group spec can allow each job to be easily run in its own docker container
* "Jenkins" server stuff is mainly built using core.async core.match  function graph and pallet if necessary

  So how do this work
  1. Developer check in code and triggers a hook
  2. The commit hash is sent via the hook to a rest api
  3. The "jenkins"-lite server takes this commit and project and builds a function graph
  4. the function graph is sent into the dispatch channel
  5. The dispatcher receives the function graph and hooks it up to a new output channel forming a tuple
  6. This tuple is passed to the processing channel
  7. The processing channel runs the function graph in a seperate thread
  8. Upon returning the function graphs results are sent to the output results channel
  9. The "jenkins"-lite server takes these results and

### DSL

A set of composable macros that build out the stages of the jobs workflow and in the end create a job graph


### Job Graph 
A job is a combination of a channels hooked up together in a workflow via a function graph.

no extra technology just a simple extendable distributed programs for running the relivant commands in the right environment
  since each step relies on the previous results we can use a function graph.  Viewing the building of a jenkins job as function graph calling of a compiled function graph provides a lightweight framework within which you place your various jenkins type activities.


* The raw job can passed to and returned from functions and channels
* The job graphs return immediately when the compiled function is called.  
* All the synchronization of the build work flow a job specifies is done through channels.
* Communication  between stages happens via the channels.
* The job graph keys may be channels, maps of channels or any other clojure data structure.

  selecting a branch
  cloning git repo
  compiling
  triggering other builds
  unit testing
  component testing
  acceptance testing
  generating reports
  deploying applications
  emailing/messaging/storing results

  Instead of using a complicated mix of plugins we try to use  clojure libraries and mechanisms in the language itself to replicate the functionality of jenkins.



## Usage

One of the nice things is that when you build a job by invoking the compiled function graph is that it returns almost immediately.

We need to define what happens where:

* In the job, channels are used to pass information between the different stages a job has through out its life cycle to coordinate the synchronization of sequential operation.

*  In the server infromation about the jobs is sent to centralized location.

*  Since a job is represented as a clojure map of defnk type functions  we can easily move this around to different workers
   that then get compiled and run in the containing environment

* A compiled graph function when run is a complete state machine transforming in a series of well defined steps an artifact into anothor artifact or action result.

* The server upon when distributing work dispatches the job along with a channel that streams the job information back to the server.

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
