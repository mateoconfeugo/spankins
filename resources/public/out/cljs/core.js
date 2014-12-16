goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2410 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2410))
{return or__3548__auto____2410;
} else
{var or__3548__auto____2411 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2411))
{return or__3548__auto____2411;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2412 = coll;

if(cljs.core.truth_(and__3546__auto____2412))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2412;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2413 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2413))
{return or__3548__auto____2413;
} else
{var or__3548__auto____2414 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2414))
{return or__3548__auto____2414;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2415 = coll;

if(cljs.core.truth_(and__3546__auto____2415))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2415;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2416 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2416))
{return or__3548__auto____2416;
} else
{var or__3548__auto____2417 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2417))
{return or__3548__auto____2417;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2418 = coll;

if(cljs.core.truth_(and__3546__auto____2418))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2418;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2419 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2419))
{return or__3548__auto____2419;
} else
{var or__3548__auto____2420 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2420))
{return or__3548__auto____2420;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2427 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2421 = coll;

if(cljs.core.truth_(and__3546__auto____2421))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2421;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2422 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2422))
{return or__3548__auto____2422;
} else
{var or__3548__auto____2423 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2423))
{return or__3548__auto____2423;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2428 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2424 = coll;

if(cljs.core.truth_(and__3546__auto____2424))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2424;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2425 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2425))
{return or__3548__auto____2425;
} else
{var or__3548__auto____2426 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2426))
{return or__3548__auto____2426;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2427.call(this,coll,n);
case  3 :
return _nth__2428.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2430 = coll;

if(cljs.core.truth_(and__3546__auto____2430))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2430;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2431 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2431))
{return or__3548__auto____2431;
} else
{var or__3548__auto____2432 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2432))
{return or__3548__auto____2432;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2433 = coll;

if(cljs.core.truth_(and__3546__auto____2433))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2433;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2434 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2434))
{return or__3548__auto____2434;
} else
{var or__3548__auto____2435 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2442 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2436 = o;

if(cljs.core.truth_(and__3546__auto____2436))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2436;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2437 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2437))
{return or__3548__auto____2437;
} else
{var or__3548__auto____2438 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2443 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2439 = o;

if(cljs.core.truth_(and__3546__auto____2439))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2439;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2440 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2440))
{return or__3548__auto____2440;
} else
{var or__3548__auto____2441 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2441))
{return or__3548__auto____2441;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2442.call(this,o,k);
case  3 :
return _lookup__2443.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2445 = coll;

if(cljs.core.truth_(and__3546__auto____2445))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2445;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2446 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2446))
{return or__3548__auto____2446;
} else
{var or__3548__auto____2447 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2447))
{return or__3548__auto____2447;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2448 = coll;

if(cljs.core.truth_(and__3546__auto____2448))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2448;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2449 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2449))
{return or__3548__auto____2449;
} else
{var or__3548__auto____2450 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2450))
{return or__3548__auto____2450;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2451 = coll;

if(cljs.core.truth_(and__3546__auto____2451))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2451;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2452 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2452))
{return or__3548__auto____2452;
} else
{var or__3548__auto____2453 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2453))
{return or__3548__auto____2453;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2454 = coll;

if(cljs.core.truth_(and__3546__auto____2454))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2454;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2455 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2455))
{return or__3548__auto____2455;
} else
{var or__3548__auto____2456 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2456))
{return or__3548__auto____2456;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2457 = coll;

if(cljs.core.truth_(and__3546__auto____2457))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2457;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2458 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2458))
{return or__3548__auto____2458;
} else
{var or__3548__auto____2459 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2460 = coll;

if(cljs.core.truth_(and__3546__auto____2460))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2460;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2461 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2461))
{return or__3548__auto____2461;
} else
{var or__3548__auto____2462 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2463 = coll;

if(cljs.core.truth_(and__3546__auto____2463))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2463;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2464 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2464))
{return or__3548__auto____2464;
} else
{var or__3548__auto____2465 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2465))
{return or__3548__auto____2465;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2466 = o;

if(cljs.core.truth_(and__3546__auto____2466))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2466;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2467 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2467))
{return or__3548__auto____2467;
} else
{var or__3548__auto____2468 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2468))
{return or__3548__auto____2468;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2469 = o;

if(cljs.core.truth_(and__3546__auto____2469))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2469;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2470 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2470))
{return or__3548__auto____2470;
} else
{var or__3548__auto____2471 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2471))
{return or__3548__auto____2471;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2472 = o;

if(cljs.core.truth_(and__3546__auto____2472))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2472;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2473 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2473))
{return or__3548__auto____2473;
} else
{var or__3548__auto____2474 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2474))
{return or__3548__auto____2474;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2475 = o;

if(cljs.core.truth_(and__3546__auto____2475))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2475;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2476 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2476))
{return or__3548__auto____2476;
} else
{var or__3548__auto____2477 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2477))
{return or__3548__auto____2477;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2484 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2478 = coll;

if(cljs.core.truth_(and__3546__auto____2478))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2478;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2479 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2479))
{return or__3548__auto____2479;
} else
{var or__3548__auto____2480 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2480))
{return or__3548__auto____2480;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2485 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2481 = coll;

if(cljs.core.truth_(and__3546__auto____2481))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2481;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2482 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2482))
{return or__3548__auto____2482;
} else
{var or__3548__auto____2483 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2483))
{return or__3548__auto____2483;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2484.call(this,coll,f);
case  3 :
return _reduce__2485.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2487 = o;

if(cljs.core.truth_(and__3546__auto____2487))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2487;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2488 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2488))
{return or__3548__auto____2488;
} else
{var or__3548__auto____2489 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2489))
{return or__3548__auto____2489;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2490 = o;

if(cljs.core.truth_(and__3546__auto____2490))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2490;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2491 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2491))
{return or__3548__auto____2491;
} else
{var or__3548__auto____2492 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2492))
{return or__3548__auto____2492;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2493 = o;

if(cljs.core.truth_(and__3546__auto____2493))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2493;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2494 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2494))
{return or__3548__auto____2494;
} else
{var or__3548__auto____2495 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2495))
{return or__3548__auto____2495;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2496 = o;

if(cljs.core.truth_(and__3546__auto____2496))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2496;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2497 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2497))
{return or__3548__auto____2497;
} else
{var or__3548__auto____2498 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2498))
{return or__3548__auto____2498;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2499 = d;

if(cljs.core.truth_(and__3546__auto____2499))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2499;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2500 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2500))
{return or__3548__auto____2500;
} else
{var or__3548__auto____2501 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2501))
{return or__3548__auto____2501;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2502 = this$;

if(cljs.core.truth_(and__3546__auto____2502))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2502;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2503 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2503))
{return or__3548__auto____2503;
} else
{var or__3548__auto____2504 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2504))
{return or__3548__auto____2504;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2505 = this$;

if(cljs.core.truth_(and__3546__auto____2505))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2505;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2506 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2506))
{return or__3548__auto____2506;
} else
{var or__3548__auto____2507 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2507))
{return or__3548__auto____2507;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2508 = this$;

if(cljs.core.truth_(and__3546__auto____2508))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2508;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2509 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2509))
{return or__3548__auto____2509;
} else
{var or__3548__auto____2510 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2510))
{return or__3548__auto____2510;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2511 = null;
var G__2511__2512 = (function (o,k){
return null;
});
var G__2511__2513 = (function (o,k,not_found){
return not_found;
});
G__2511 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2511__2512.call(this,o,k);
case  3 :
return G__2511__2513.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2511;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2515 = null;
var G__2515__2516 = (function (_,f){
return f.call(null);
});
var G__2515__2517 = (function (_,f,start){
return start;
});
G__2515 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2515__2516.call(this,_,f);
case  3 :
return G__2515__2517.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2515;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2519 = null;
var G__2519__2520 = (function (_,n){
return null;
});
var G__2519__2521 = (function (_,n,not_found){
return not_found;
});
G__2519 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2519__2520.call(this,_,n);
case  3 :
return G__2519__2521.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2519;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2529 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2523 = cljs.core._nth.call(null,cicoll,0);
var n__2524 = 1;

while(true){
if(cljs.core.truth_((n__2524 < cljs.core._count.call(null,cicoll))))
{{
var G__2533 = f.call(null,val__2523,cljs.core._nth.call(null,cicoll,n__2524));
var G__2534 = (n__2524 + 1);
val__2523 = G__2533;
n__2524 = G__2534;
continue;
}
} else
{return val__2523;
}
break;
}
}
});
var ci_reduce__2530 = (function (cicoll,f,val){
var val__2525 = val;
var n__2526 = 0;

while(true){
if(cljs.core.truth_((n__2526 < cljs.core._count.call(null,cicoll))))
{{
var G__2535 = f.call(null,val__2525,cljs.core._nth.call(null,cicoll,n__2526));
var G__2536 = (n__2526 + 1);
val__2525 = G__2535;
n__2526 = G__2536;
continue;
}
} else
{return val__2525;
}
break;
}
});
var ci_reduce__2531 = (function (cicoll,f,val,idx){
var val__2527 = val;
var n__2528 = idx;

while(true){
if(cljs.core.truth_((n__2528 < cljs.core._count.call(null,cicoll))))
{{
var G__2537 = f.call(null,val__2527,cljs.core._nth.call(null,cicoll,n__2528));
var G__2538 = (n__2528 + 1);
val__2527 = G__2537;
n__2528 = G__2538;
continue;
}
} else
{return val__2527;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2529.call(this,cicoll,f);
case  3 :
return ci_reduce__2530.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2531.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2539 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2552 = null;
var G__2552__2553 = (function (coll,f){
var this__2540 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2540.a[this__2540.i]),(this__2540.i + 1));
});
var G__2552__2554 = (function (coll,f,start){
var this__2541 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2541.i);
});
G__2552 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2552__2553.call(this,coll,f);
case  3 :
return G__2552__2554.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2552;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2542 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2543 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2556 = null;
var G__2556__2557 = (function (coll,n){
var this__2544 = this;
var i__2545 = (n + this__2544.i);

if(cljs.core.truth_((i__2545 < this__2544.a.length)))
{return (this__2544.a[i__2545]);
} else
{return null;
}
});
var G__2556__2558 = (function (coll,n,not_found){
var this__2546 = this;
var i__2547 = (n + this__2546.i);

if(cljs.core.truth_((i__2547 < this__2546.a.length)))
{return (this__2546.a[i__2547]);
} else
{return not_found;
}
});
G__2556 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2556__2557.call(this,coll,n);
case  3 :
return G__2556__2558.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2556;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2548 = this;
return (this__2548.a.length - this__2548.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2549 = this;
return (this__2549.a[this__2549.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2550 = this;
if(cljs.core.truth_(((this__2550.i + 1) < this__2550.a.length)))
{return (new cljs.core.IndexedSeq(this__2550.a,(this__2550.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2551 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2560 = null;
var G__2560__2561 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2560__2562 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2560 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2560__2561.call(this,array,f);
case  3 :
return G__2560__2562.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2560;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2564 = null;
var G__2564__2565 = (function (array,k){
return (array[k]);
});
var G__2564__2566 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2564 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2564__2565.call(this,array,k);
case  3 :
return G__2564__2566.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2564;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2568 = null;
var G__2568__2569 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2568__2570 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2568 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2568__2569.call(this,array,n);
case  3 :
return G__2568__2570.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2568;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2572 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2572))
{var s__2573 = temp__3698__auto____2572;

return cljs.core._first.call(null,s__2573);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2574 = cljs.core.next.call(null,s);
s = G__2574;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2575 = cljs.core.seq.call(null,x);
var n__2576 = 0;

while(true){
if(cljs.core.truth_(s__2575))
{{
var G__2577 = cljs.core.next.call(null,s__2575);
var G__2578 = (n__2576 + 1);
s__2575 = G__2577;
n__2576 = G__2578;
continue;
}
} else
{return n__2576;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2579 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2580 = (function() { 
var G__2582__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2583 = conj.call(null,coll,x);
var G__2584 = cljs.core.first.call(null,xs);
var G__2585 = cljs.core.next.call(null,xs);
coll = G__2583;
x = G__2584;
xs = G__2585;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2582 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2582__delegate.call(this, coll, x, xs);
};
G__2582.cljs$lang$maxFixedArity = 2;
G__2582.cljs$lang$applyTo = (function (arglist__2586){
var coll = cljs.core.first(arglist__2586);
var x = cljs.core.first(cljs.core.next(arglist__2586));
var xs = cljs.core.rest(cljs.core.next(arglist__2586));
return G__2582__delegate.call(this, coll, x, xs);
});
return G__2582;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2579.call(this,coll,x);
default:
return conj__2580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2580.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2587 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__2588 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2587.call(this,coll,n);
case  3 :
return nth__2588.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2590 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2591 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2590.call(this,o,k);
case  3 :
return get__2591.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2594 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2595 = (function() { 
var G__2597__delegate = function (coll,k,v,kvs){
while(true){
var ret__2593 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2598 = ret__2593;
var G__2599 = cljs.core.first.call(null,kvs);
var G__2600 = cljs.core.second.call(null,kvs);
var G__2601 = cljs.core.nnext.call(null,kvs);
coll = G__2598;
k = G__2599;
v = G__2600;
kvs = G__2601;
continue;
}
} else
{return ret__2593;
}
break;
}
};
var G__2597 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2597__delegate.call(this, coll, k, v, kvs);
};
G__2597.cljs$lang$maxFixedArity = 3;
G__2597.cljs$lang$applyTo = (function (arglist__2602){
var coll = cljs.core.first(arglist__2602);
var k = cljs.core.first(cljs.core.next(arglist__2602));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2602)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2602)));
return G__2597__delegate.call(this, coll, k, v, kvs);
});
return G__2597;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2594.call(this,coll,k,v);
default:
return assoc__2595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2595.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2604 = (function (coll){
return coll;
});
var dissoc__2605 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2606 = (function() { 
var G__2608__delegate = function (coll,k,ks){
while(true){
var ret__2603 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2609 = ret__2603;
var G__2610 = cljs.core.first.call(null,ks);
var G__2611 = cljs.core.next.call(null,ks);
coll = G__2609;
k = G__2610;
ks = G__2611;
continue;
}
} else
{return ret__2603;
}
break;
}
};
var G__2608 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2608__delegate.call(this, coll, k, ks);
};
G__2608.cljs$lang$maxFixedArity = 2;
G__2608.cljs$lang$applyTo = (function (arglist__2612){
var coll = cljs.core.first(arglist__2612);
var k = cljs.core.first(cljs.core.next(arglist__2612));
var ks = cljs.core.rest(cljs.core.next(arglist__2612));
return G__2608__delegate.call(this, coll, k, ks);
});
return G__2608;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2604.call(this,coll);
case  2 :
return dissoc__2605.call(this,coll,k);
default:
return dissoc__2606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2606.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__319__auto____2613 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2614 = x__319__auto____2613;

if(cljs.core.truth_(and__3546__auto____2614))
{var and__3546__auto____2615 = x__319__auto____2613.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2615))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2613));
} else
{return and__3546__auto____2615;
}
} else
{return and__3546__auto____2614;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____2613);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2617 = (function (coll){
return coll;
});
var disj__2618 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2619 = (function() { 
var G__2621__delegate = function (coll,k,ks){
while(true){
var ret__2616 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2622 = ret__2616;
var G__2623 = cljs.core.first.call(null,ks);
var G__2624 = cljs.core.next.call(null,ks);
coll = G__2622;
k = G__2623;
ks = G__2624;
continue;
}
} else
{return ret__2616;
}
break;
}
};
var G__2621 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2621__delegate.call(this, coll, k, ks);
};
G__2621.cljs$lang$maxFixedArity = 2;
G__2621.cljs$lang$applyTo = (function (arglist__2625){
var coll = cljs.core.first(arglist__2625);
var k = cljs.core.first(cljs.core.next(arglist__2625));
var ks = cljs.core.rest(cljs.core.next(arglist__2625));
return G__2621__delegate.call(this, coll, k, ks);
});
return G__2621;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2617.call(this,coll);
case  2 :
return disj__2618.call(this,coll,k);
default:
return disj__2619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2619.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2626 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2627 = x__319__auto____2626;

if(cljs.core.truth_(and__3546__auto____2627))
{var and__3546__auto____2628 = x__319__auto____2626.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2628))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2626));
} else
{return and__3546__auto____2628;
}
} else
{return and__3546__auto____2627;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__319__auto____2626);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2629 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2630 = x__319__auto____2629;

if(cljs.core.truth_(and__3546__auto____2630))
{var and__3546__auto____2631 = x__319__auto____2629.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2631))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2629));
} else
{return and__3546__auto____2631;
}
} else
{return and__3546__auto____2630;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__319__auto____2629);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__319__auto____2632 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2633 = x__319__auto____2632;

if(cljs.core.truth_(and__3546__auto____2633))
{var and__3546__auto____2634 = x__319__auto____2632.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2634))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2632));
} else
{return and__3546__auto____2634;
}
} else
{return and__3546__auto____2633;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__319__auto____2632);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__319__auto____2635 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2636 = x__319__auto____2635;

if(cljs.core.truth_(and__3546__auto____2636))
{var and__3546__auto____2637 = x__319__auto____2635.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2637))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2635));
} else
{return and__3546__auto____2637;
}
} else
{return and__3546__auto____2636;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__319__auto____2635);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__319__auto____2638 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2639 = x__319__auto____2638;

if(cljs.core.truth_(and__3546__auto____2639))
{var and__3546__auto____2640 = x__319__auto____2638.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2640))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2638));
} else
{return and__3546__auto____2640;
}
} else
{return and__3546__auto____2639;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__319__auto____2638);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2641 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2642 = x__319__auto____2641;

if(cljs.core.truth_(and__3546__auto____2642))
{var and__3546__auto____2643 = x__319__auto____2641.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2643))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2641));
} else
{return and__3546__auto____2643;
}
} else
{return and__3546__auto____2642;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__319__auto____2641);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__319__auto____2644 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2645 = x__319__auto____2644;

if(cljs.core.truth_(and__3546__auto____2645))
{var and__3546__auto____2646 = x__319__auto____2644.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2646))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2644));
} else
{return and__3546__auto____2646;
}
} else
{return and__3546__auto____2645;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__319__auto____2644);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2647 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2647.push(key);
}));
return keys__2647;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__319__auto____2648 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2649 = x__319__auto____2648;

if(cljs.core.truth_(and__3546__auto____2649))
{var and__3546__auto____2650 = x__319__auto____2648.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2650))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2648));
} else
{return and__3546__auto____2650;
}
} else
{return and__3546__auto____2649;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__319__auto____2648);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2651 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2651))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2652 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2652))
{return or__3548__auto____2652;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2651;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2653 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2653))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2653;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2654 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2654))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2654;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2655 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2655))
{return (n == n.toFixed());
} else
{return and__3546__auto____2655;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2656 = coll;

if(cljs.core.truth_(and__3546__auto____2656))
{var and__3546__auto____2657 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2657))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2657;
}
} else
{return and__3546__auto____2656;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2662 = (function (x){
return true;
});
var distinct_QMARK___2663 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2664 = (function() { 
var G__2666__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2658 = cljs.core.set([y,x]);
var xs__2659 = more;

while(true){
var x__2660 = cljs.core.first.call(null,xs__2659);
var etc__2661 = cljs.core.next.call(null,xs__2659);

if(cljs.core.truth_(xs__2659))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2658,x__2660)))
{return false;
} else
{{
var G__2667 = cljs.core.conj.call(null,s__2658,x__2660);
var G__2668 = etc__2661;
s__2658 = G__2667;
xs__2659 = G__2668;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2666 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2666__delegate.call(this, x, y, more);
};
G__2666.cljs$lang$maxFixedArity = 2;
G__2666.cljs$lang$applyTo = (function (arglist__2669){
var x = cljs.core.first(arglist__2669);
var y = cljs.core.first(cljs.core.next(arglist__2669));
var more = cljs.core.rest(cljs.core.next(arglist__2669));
return G__2666__delegate.call(this, x, y, more);
});
return G__2666;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2662.call(this,x);
case  2 :
return distinct_QMARK___2663.call(this,x,y);
default:
return distinct_QMARK___2664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2664.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2670 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2670)))
{return r__2670;
} else
{if(cljs.core.truth_(r__2670))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2672 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2673 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2671 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2671,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2671);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2672.call(this,comp);
case  2 :
return sort__2673.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2675 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2676 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2675.call(this,keyfn,comp);
case  3 :
return sort_by__2676.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2678 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2679 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2678.call(this,f,val);
case  3 :
return reduce__2679.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2685 = (function (f,coll){
var temp__3695__auto____2681 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2681))
{var s__2682 = temp__3695__auto____2681;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2682),cljs.core.next.call(null,s__2682));
} else
{return f.call(null);
}
});
var seq_reduce__2686 = (function (f,val,coll){
var val__2683 = val;
var coll__2684 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2684))
{{
var G__2688 = f.call(null,val__2683,cljs.core.first.call(null,coll__2684));
var G__2689 = cljs.core.next.call(null,coll__2684);
val__2683 = G__2688;
coll__2684 = G__2689;
continue;
}
} else
{return val__2683;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2685.call(this,f,val);
case  3 :
return seq_reduce__2686.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2690 = null;
var G__2690__2691 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2690__2692 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2690 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2690__2691.call(this,coll,f);
case  3 :
return G__2690__2692.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2690;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2694 = (function (){
return 0;
});
var _PLUS___2695 = (function (x){
return x;
});
var _PLUS___2696 = (function (x,y){
return (x + y);
});
var _PLUS___2697 = (function() { 
var G__2699__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2699 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2699__delegate.call(this, x, y, more);
};
G__2699.cljs$lang$maxFixedArity = 2;
G__2699.cljs$lang$applyTo = (function (arglist__2700){
var x = cljs.core.first(arglist__2700);
var y = cljs.core.first(cljs.core.next(arglist__2700));
var more = cljs.core.rest(cljs.core.next(arglist__2700));
return G__2699__delegate.call(this, x, y, more);
});
return G__2699;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2694.call(this);
case  1 :
return _PLUS___2695.call(this,x);
case  2 :
return _PLUS___2696.call(this,x,y);
default:
return _PLUS___2697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2697.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2701 = (function (x){
return (- x);
});
var ___2702 = (function (x,y){
return (x - y);
});
var ___2703 = (function() { 
var G__2705__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2705 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2705__delegate.call(this, x, y, more);
};
G__2705.cljs$lang$maxFixedArity = 2;
G__2705.cljs$lang$applyTo = (function (arglist__2706){
var x = cljs.core.first(arglist__2706);
var y = cljs.core.first(cljs.core.next(arglist__2706));
var more = cljs.core.rest(cljs.core.next(arglist__2706));
return G__2705__delegate.call(this, x, y, more);
});
return G__2705;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2701.call(this,x);
case  2 :
return ___2702.call(this,x,y);
default:
return ___2703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2703.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2707 = (function (){
return 1;
});
var _STAR___2708 = (function (x){
return x;
});
var _STAR___2709 = (function (x,y){
return (x * y);
});
var _STAR___2710 = (function() { 
var G__2712__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2712 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2712__delegate.call(this, x, y, more);
};
G__2712.cljs$lang$maxFixedArity = 2;
G__2712.cljs$lang$applyTo = (function (arglist__2713){
var x = cljs.core.first(arglist__2713);
var y = cljs.core.first(cljs.core.next(arglist__2713));
var more = cljs.core.rest(cljs.core.next(arglist__2713));
return G__2712__delegate.call(this, x, y, more);
});
return G__2712;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2707.call(this);
case  1 :
return _STAR___2708.call(this,x);
case  2 :
return _STAR___2709.call(this,x,y);
default:
return _STAR___2710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2710.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2714 = (function (x){
return (1 / x);
});
var _SLASH___2715 = (function (x,y){
return (x / y);
});
var _SLASH___2716 = (function() { 
var G__2718__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2718 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2718__delegate.call(this, x, y, more);
};
G__2718.cljs$lang$maxFixedArity = 2;
G__2718.cljs$lang$applyTo = (function (arglist__2719){
var x = cljs.core.first(arglist__2719);
var y = cljs.core.first(cljs.core.next(arglist__2719));
var more = cljs.core.rest(cljs.core.next(arglist__2719));
return G__2718__delegate.call(this, x, y, more);
});
return G__2718;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2714.call(this,x);
case  2 :
return _SLASH___2715.call(this,x,y);
default:
return _SLASH___2716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2716.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2720 = (function (x){
return true;
});
var _LT___2721 = (function (x,y){
return (x < y);
});
var _LT___2722 = (function() { 
var G__2724__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2725 = y;
var G__2726 = cljs.core.first.call(null,more);
var G__2727 = cljs.core.next.call(null,more);
x = G__2725;
y = G__2726;
more = G__2727;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2724 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2724__delegate.call(this, x, y, more);
};
G__2724.cljs$lang$maxFixedArity = 2;
G__2724.cljs$lang$applyTo = (function (arglist__2728){
var x = cljs.core.first(arglist__2728);
var y = cljs.core.first(cljs.core.next(arglist__2728));
var more = cljs.core.rest(cljs.core.next(arglist__2728));
return G__2724__delegate.call(this, x, y, more);
});
return G__2724;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2720.call(this,x);
case  2 :
return _LT___2721.call(this,x,y);
default:
return _LT___2722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2722.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2729 = (function (x){
return true;
});
var _LT__EQ___2730 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2731 = (function() { 
var G__2733__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2734 = y;
var G__2735 = cljs.core.first.call(null,more);
var G__2736 = cljs.core.next.call(null,more);
x = G__2734;
y = G__2735;
more = G__2736;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2733 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2733__delegate.call(this, x, y, more);
};
G__2733.cljs$lang$maxFixedArity = 2;
G__2733.cljs$lang$applyTo = (function (arglist__2737){
var x = cljs.core.first(arglist__2737);
var y = cljs.core.first(cljs.core.next(arglist__2737));
var more = cljs.core.rest(cljs.core.next(arglist__2737));
return G__2733__delegate.call(this, x, y, more);
});
return G__2733;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2729.call(this,x);
case  2 :
return _LT__EQ___2730.call(this,x,y);
default:
return _LT__EQ___2731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2731.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2738 = (function (x){
return true;
});
var _GT___2739 = (function (x,y){
return (x > y);
});
var _GT___2740 = (function() { 
var G__2742__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2743 = y;
var G__2744 = cljs.core.first.call(null,more);
var G__2745 = cljs.core.next.call(null,more);
x = G__2743;
y = G__2744;
more = G__2745;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2742 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2742__delegate.call(this, x, y, more);
};
G__2742.cljs$lang$maxFixedArity = 2;
G__2742.cljs$lang$applyTo = (function (arglist__2746){
var x = cljs.core.first(arglist__2746);
var y = cljs.core.first(cljs.core.next(arglist__2746));
var more = cljs.core.rest(cljs.core.next(arglist__2746));
return G__2742__delegate.call(this, x, y, more);
});
return G__2742;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2738.call(this,x);
case  2 :
return _GT___2739.call(this,x,y);
default:
return _GT___2740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2740.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2747 = (function (x){
return true;
});
var _GT__EQ___2748 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2749 = (function() { 
var G__2751__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2752 = y;
var G__2753 = cljs.core.first.call(null,more);
var G__2754 = cljs.core.next.call(null,more);
x = G__2752;
y = G__2753;
more = G__2754;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2751 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2751__delegate.call(this, x, y, more);
};
G__2751.cljs$lang$maxFixedArity = 2;
G__2751.cljs$lang$applyTo = (function (arglist__2755){
var x = cljs.core.first(arglist__2755);
var y = cljs.core.first(cljs.core.next(arglist__2755));
var more = cljs.core.rest(cljs.core.next(arglist__2755));
return G__2751__delegate.call(this, x, y, more);
});
return G__2751;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2747.call(this,x);
case  2 :
return _GT__EQ___2748.call(this,x,y);
default:
return _GT__EQ___2749.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2749.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2756 = (function (x){
return x;
});
var max__2757 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2758 = (function() { 
var G__2760__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2760 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2760__delegate.call(this, x, y, more);
};
G__2760.cljs$lang$maxFixedArity = 2;
G__2760.cljs$lang$applyTo = (function (arglist__2761){
var x = cljs.core.first(arglist__2761);
var y = cljs.core.first(cljs.core.next(arglist__2761));
var more = cljs.core.rest(cljs.core.next(arglist__2761));
return G__2760__delegate.call(this, x, y, more);
});
return G__2760;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2756.call(this,x);
case  2 :
return max__2757.call(this,x,y);
default:
return max__2758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2758.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2762 = (function (x){
return x;
});
var min__2763 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2764 = (function() { 
var G__2766__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2766 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2766__delegate.call(this, x, y, more);
};
G__2766.cljs$lang$maxFixedArity = 2;
G__2766.cljs$lang$applyTo = (function (arglist__2767){
var x = cljs.core.first(arglist__2767);
var y = cljs.core.first(cljs.core.next(arglist__2767));
var more = cljs.core.rest(cljs.core.next(arglist__2767));
return G__2766__delegate.call(this, x, y, more);
});
return G__2766;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2762.call(this,x);
case  2 :
return min__2763.call(this,x,y);
default:
return min__2764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2764.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2768 = (n % d);

return cljs.core.fix.call(null,((n - rem__2768) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2769 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2769));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2770 = (function (){
return Math.random.call(null);
});
var rand__2771 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2770.call(this);
case  1 :
return rand__2771.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2773 = (function (x){
return true;
});
var _EQ__EQ___2774 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2775 = (function() { 
var G__2777__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2778 = y;
var G__2779 = cljs.core.first.call(null,more);
var G__2780 = cljs.core.next.call(null,more);
x = G__2778;
y = G__2779;
more = G__2780;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2777 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2777__delegate.call(this, x, y, more);
};
G__2777.cljs$lang$maxFixedArity = 2;
G__2777.cljs$lang$applyTo = (function (arglist__2781){
var x = cljs.core.first(arglist__2781);
var y = cljs.core.first(cljs.core.next(arglist__2781));
var more = cljs.core.rest(cljs.core.next(arglist__2781));
return G__2777__delegate.call(this, x, y, more);
});
return G__2777;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2773.call(this,x);
case  2 :
return _EQ__EQ___2774.call(this,x,y);
default:
return _EQ__EQ___2775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2775.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2782 = n;
var xs__2783 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2784 = xs__2783;

if(cljs.core.truth_(and__3546__auto____2784))
{return (n__2782 > 0);
} else
{return and__3546__auto____2784;
}
})()))
{{
var G__2785 = (n__2782 - 1);
var G__2786 = cljs.core.next.call(null,xs__2783);
n__2782 = G__2785;
xs__2783 = G__2786;
continue;
}
} else
{return xs__2783;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2791 = null;
var G__2791__2792 = (function (coll,n){
var temp__3695__auto____2787 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2787))
{var xs__2788 = temp__3695__auto____2787;

return cljs.core.first.call(null,xs__2788);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2791__2793 = (function (coll,n,not_found){
var temp__3695__auto____2789 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2789))
{var xs__2790 = temp__3695__auto____2789;

return cljs.core.first.call(null,xs__2790);
} else
{return not_found;
}
});
G__2791 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2791__2792.call(this,coll,n);
case  3 :
return G__2791__2793.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2791;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2795 = (function (){
return "";
});
var str_STAR___2796 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2797 = (function() { 
var G__2799__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2800 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2801 = cljs.core.next.call(null,more);
sb = G__2800;
more = G__2801;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2799 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2799__delegate.call(this, x, ys);
};
G__2799.cljs$lang$maxFixedArity = 1;
G__2799.cljs$lang$applyTo = (function (arglist__2802){
var x = cljs.core.first(arglist__2802);
var ys = cljs.core.rest(arglist__2802);
return G__2799__delegate.call(this, x, ys);
});
return G__2799;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2795.call(this);
case  1 :
return str_STAR___2796.call(this,x);
default:
return str_STAR___2797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2797.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2803 = (function (){
return "";
});
var str__2804 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2805 = (function() { 
var G__2807__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2807 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2807__delegate.call(this, x, ys);
};
G__2807.cljs$lang$maxFixedArity = 1;
G__2807.cljs$lang$applyTo = (function (arglist__2808){
var x = cljs.core.first(arglist__2808);
var ys = cljs.core.rest(arglist__2808);
return G__2807__delegate.call(this, x, ys);
});
return G__2807;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2803.call(this);
case  1 :
return str__2804.call(this,x);
default:
return str__2805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2805.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2809 = (function (s,start){
return s.substring(start);
});
var subs__2810 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2809.call(this,s,start);
case  3 :
return subs__2810.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2812 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__2813 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2812.call(this,ns);
case  2 :
return symbol__2813.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2815 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2816 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2815.call(this,ns);
case  2 :
return keyword__2816.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2818 = cljs.core.seq.call(null,x);
var ys__2819 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2818)))
{return cljs.core.nil_QMARK_.call(null,ys__2819);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2819)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2818),cljs.core.first.call(null,ys__2819))))
{{
var G__2820 = cljs.core.next.call(null,xs__2818);
var G__2821 = cljs.core.next.call(null,ys__2819);
xs__2818 = G__2820;
ys__2819 = G__2821;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2822_SHARP_,p2__2823_SHARP_){
return cljs.core.hash_combine.call(null,p1__2822_SHARP_,cljs.core.hash.call(null,p2__2823_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2824__2825 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2824__2825))
{var G__2827__2829 = cljs.core.first.call(null,G__2824__2825);
var vec__2828__2830 = G__2827__2829;
var key_name__2831 = cljs.core.nth.call(null,vec__2828__2830,0,null);
var f__2832 = cljs.core.nth.call(null,vec__2828__2830,1,null);
var G__2824__2833 = G__2824__2825;

var G__2827__2834 = G__2827__2829;
var G__2824__2835 = G__2824__2833;

while(true){
var vec__2836__2837 = G__2827__2834;
var key_name__2838 = cljs.core.nth.call(null,vec__2836__2837,0,null);
var f__2839 = cljs.core.nth.call(null,vec__2836__2837,1,null);
var G__2824__2840 = G__2824__2835;

var str_name__2841 = cljs.core.name.call(null,key_name__2838);

obj[str_name__2841] = f__2839;
var temp__3698__auto____2842 = cljs.core.next.call(null,G__2824__2840);

if(cljs.core.truth_(temp__3698__auto____2842))
{var G__2824__2843 = temp__3698__auto____2842;

{
var G__2844 = cljs.core.first.call(null,G__2824__2843);
var G__2845 = G__2824__2843;
G__2827__2834 = G__2844;
G__2824__2835 = G__2845;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2846 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2847 = this;
return (new cljs.core.List(this__2847.meta,o,coll,(this__2847.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2848 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2849 = this;
return this__2849.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2850 = this;
return this__2850.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2851 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2852 = this;
return this__2852.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2853 = this;
return this__2853.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2854 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2855 = this;
return (new cljs.core.List(meta,this__2855.first,this__2855.rest,this__2855.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2856 = this;
return this__2856.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2857 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2858 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2859 = this;
return (new cljs.core.List(this__2859.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2860 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2861 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2862 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2863 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2864 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2865 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2866 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2867 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2868 = this;
return this__2868.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2869 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2870){
var items = cljs.core.seq( arglist__2870 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2871 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2872 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2873 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2874 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2874.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2875 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2876 = this;
return this__2876.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2877 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2877.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2877.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2878 = this;
return this__2878.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2879 = this;
return (new cljs.core.Cons(meta,this__2879.first,this__2879.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2880 = null;
var G__2880__2881 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2880__2882 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2880 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2880__2881.call(this,string,f);
case  3 :
return G__2880__2882.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2880;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2884 = null;
var G__2884__2885 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2884__2886 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2884 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2884__2885.call(this,string,k);
case  3 :
return G__2884__2886.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2884;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2888 = null;
var G__2888__2889 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2888__2890 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2888 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2888__2889.call(this,string,n);
case  3 :
return G__2888__2890.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2888;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2892 = null;
var G__2892__2893 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2892__2894 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2892 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2892__2893.call(this,_,coll);
case  3 :
return G__2892__2894.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2892;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2896 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2896;
} else
{lazy_seq.x = x__2896.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2897 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2898 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2899 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2900 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2900.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2901 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2902 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2903 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2904 = this;
return this__2904.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2905 = this;
return (new cljs.core.LazySeq(meta,this__2905.realized,this__2905.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2906 = cljs.core.array.call(null);

var s__2907 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2907)))
{ary__2906.push(cljs.core.first.call(null,s__2907));
{
var G__2908 = cljs.core.next.call(null,s__2907);
s__2907 = G__2908;
continue;
}
} else
{return ary__2906;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2909 = s;
var i__2910 = n;
var sum__2911 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2912 = (i__2910 > 0);

if(cljs.core.truth_(and__3546__auto____2912))
{return cljs.core.seq.call(null,s__2909);
} else
{return and__3546__auto____2912;
}
})()))
{{
var G__2913 = cljs.core.next.call(null,s__2909);
var G__2914 = (i__2910 - 1);
var G__2915 = (sum__2911 + 1);
s__2909 = G__2913;
i__2910 = G__2914;
sum__2911 = G__2915;
continue;
}
} else
{return sum__2911;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2919 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2920 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2921 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2916 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2916))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2916),concat.call(null,cljs.core.rest.call(null,s__2916),y));
} else
{return y;
}
})));
});
var concat__2922 = (function() { 
var G__2924__delegate = function (x,y,zs){
var cat__2918 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2917 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2917))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2917),cat.call(null,cljs.core.rest.call(null,xys__2917),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2918.call(null,concat.call(null,x,y),zs);
};
var G__2924 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2924__delegate.call(this, x, y, zs);
};
G__2924.cljs$lang$maxFixedArity = 2;
G__2924.cljs$lang$applyTo = (function (arglist__2925){
var x = cljs.core.first(arglist__2925);
var y = cljs.core.first(cljs.core.next(arglist__2925));
var zs = cljs.core.rest(cljs.core.next(arglist__2925));
return G__2924__delegate.call(this, x, y, zs);
});
return G__2924;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2919.call(this);
case  1 :
return concat__2920.call(this,x);
case  2 :
return concat__2921.call(this,x,y);
default:
return concat__2922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2922.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2926 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2927 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2928 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2929 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2930 = (function() { 
var G__2932__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2932 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2932__delegate.call(this, a, b, c, d, more);
};
G__2932.cljs$lang$maxFixedArity = 4;
G__2932.cljs$lang$applyTo = (function (arglist__2933){
var a = cljs.core.first(arglist__2933);
var b = cljs.core.first(cljs.core.next(arglist__2933));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2933)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2933))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2933))));
return G__2932__delegate.call(this, a, b, c, d, more);
});
return G__2932;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2926.call(this,a);
case  2 :
return list_STAR___2927.call(this,a,b);
case  3 :
return list_STAR___2928.call(this,a,b,c);
case  4 :
return list_STAR___2929.call(this,a,b,c,d);
default:
return list_STAR___2930.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2930.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2943 = (function (f,args){
var fixed_arity__2934 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2934 + 1)) <= fixed_arity__2934)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2944 = (function (f,x,args){
var arglist__2935 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2936 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2935,fixed_arity__2936) <= fixed_arity__2936)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2935));
} else
{return f.cljs$lang$applyTo(arglist__2935);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2935));
}
});
var apply__2945 = (function (f,x,y,args){
var arglist__2937 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2938 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2937,fixed_arity__2938) <= fixed_arity__2938)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2937));
} else
{return f.cljs$lang$applyTo(arglist__2937);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2937));
}
});
var apply__2946 = (function (f,x,y,z,args){
var arglist__2939 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2940 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2939,fixed_arity__2940) <= fixed_arity__2940)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2939));
} else
{return f.cljs$lang$applyTo(arglist__2939);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2939));
}
});
var apply__2947 = (function() { 
var G__2949__delegate = function (f,a,b,c,d,args){
var arglist__2941 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2942 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2941,fixed_arity__2942) <= fixed_arity__2942)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2941));
} else
{return f.cljs$lang$applyTo(arglist__2941);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2941));
}
};
var G__2949 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2949__delegate.call(this, f, a, b, c, d, args);
};
G__2949.cljs$lang$maxFixedArity = 5;
G__2949.cljs$lang$applyTo = (function (arglist__2950){
var f = cljs.core.first(arglist__2950);
var a = cljs.core.first(cljs.core.next(arglist__2950));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2950)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2950))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2950)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2950)))));
return G__2949__delegate.call(this, f, a, b, c, d, args);
});
return G__2949;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2943.call(this,f,a);
case  3 :
return apply__2944.call(this,f,a,b);
case  4 :
return apply__2945.call(this,f,a,b,c);
case  5 :
return apply__2946.call(this,f,a,b,c,d);
default:
return apply__2947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2947.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2951){
var obj = cljs.core.first(arglist__2951);
var f = cljs.core.first(cljs.core.next(arglist__2951));
var args = cljs.core.rest(cljs.core.next(arglist__2951));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2952 = (function (x){
return false;
});
var not_EQ___2953 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2954 = (function() { 
var G__2956__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2956 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2956__delegate.call(this, x, y, more);
};
G__2956.cljs$lang$maxFixedArity = 2;
G__2956.cljs$lang$applyTo = (function (arglist__2957){
var x = cljs.core.first(arglist__2957);
var y = cljs.core.first(cljs.core.next(arglist__2957));
var more = cljs.core.rest(cljs.core.next(arglist__2957));
return G__2956__delegate.call(this, x, y, more);
});
return G__2956;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2952.call(this,x);
case  2 :
return not_EQ___2953.call(this,x,y);
default:
return not_EQ___2954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2954.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2958 = pred;
var G__2959 = cljs.core.next.call(null,coll);
pred = G__2958;
coll = G__2959;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2960 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2960))
{return or__3548__auto____2960;
} else
{{
var G__2961 = pred;
var G__2962 = cljs.core.next.call(null,coll);
pred = G__2961;
coll = G__2962;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2963 = null;
var G__2963__2964 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2963__2965 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2963__2966 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2963__2967 = (function() { 
var G__2969__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2969 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2969__delegate.call(this, x, y, zs);
};
G__2969.cljs$lang$maxFixedArity = 2;
G__2969.cljs$lang$applyTo = (function (arglist__2970){
var x = cljs.core.first(arglist__2970);
var y = cljs.core.first(cljs.core.next(arglist__2970));
var zs = cljs.core.rest(cljs.core.next(arglist__2970));
return G__2969__delegate.call(this, x, y, zs);
});
return G__2969;
})()
;
G__2963 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2963__2964.call(this);
case  1 :
return G__2963__2965.call(this,x);
case  2 :
return G__2963__2966.call(this,x,y);
default:
return G__2963__2967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2963.cljs$lang$maxFixedArity = 2;
G__2963.cljs$lang$applyTo = G__2963__2967.cljs$lang$applyTo;
return G__2963;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2971__delegate = function (args){
return x;
};
var G__2971 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2971__delegate.call(this, args);
};
G__2971.cljs$lang$maxFixedArity = 0;
G__2971.cljs$lang$applyTo = (function (arglist__2972){
var args = cljs.core.seq( arglist__2972 );;
return G__2971__delegate.call(this, args);
});
return G__2971;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2976 = (function (){
return cljs.core.identity;
});
var comp__2977 = (function (f){
return f;
});
var comp__2978 = (function (f,g){
return (function() {
var G__2982 = null;
var G__2982__2983 = (function (){
return f.call(null,g.call(null));
});
var G__2982__2984 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2982__2985 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2982__2986 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2982__2987 = (function() { 
var G__2989__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2989 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2989__delegate.call(this, x, y, z, args);
};
G__2989.cljs$lang$maxFixedArity = 3;
G__2989.cljs$lang$applyTo = (function (arglist__2990){
var x = cljs.core.first(arglist__2990);
var y = cljs.core.first(cljs.core.next(arglist__2990));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2990)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2990)));
return G__2989__delegate.call(this, x, y, z, args);
});
return G__2989;
})()
;
G__2982 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2982__2983.call(this);
case  1 :
return G__2982__2984.call(this,x);
case  2 :
return G__2982__2985.call(this,x,y);
case  3 :
return G__2982__2986.call(this,x,y,z);
default:
return G__2982__2987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2982.cljs$lang$maxFixedArity = 3;
G__2982.cljs$lang$applyTo = G__2982__2987.cljs$lang$applyTo;
return G__2982;
})()
});
var comp__2979 = (function (f,g,h){
return (function() {
var G__2991 = null;
var G__2991__2992 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2991__2993 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2991__2994 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2991__2995 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2991__2996 = (function() { 
var G__2998__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2998 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2998__delegate.call(this, x, y, z, args);
};
G__2998.cljs$lang$maxFixedArity = 3;
G__2998.cljs$lang$applyTo = (function (arglist__2999){
var x = cljs.core.first(arglist__2999);
var y = cljs.core.first(cljs.core.next(arglist__2999));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2999)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2999)));
return G__2998__delegate.call(this, x, y, z, args);
});
return G__2998;
})()
;
G__2991 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2991__2992.call(this);
case  1 :
return G__2991__2993.call(this,x);
case  2 :
return G__2991__2994.call(this,x,y);
case  3 :
return G__2991__2995.call(this,x,y,z);
default:
return G__2991__2996.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2991.cljs$lang$maxFixedArity = 3;
G__2991.cljs$lang$applyTo = G__2991__2996.cljs$lang$applyTo;
return G__2991;
})()
});
var comp__2980 = (function() { 
var G__3000__delegate = function (f1,f2,f3,fs){
var fs__2973 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3001__delegate = function (args){
var ret__2974 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2973),args);
var fs__2975 = cljs.core.next.call(null,fs__2973);

while(true){
if(cljs.core.truth_(fs__2975))
{{
var G__3002 = cljs.core.first.call(null,fs__2975).call(null,ret__2974);
var G__3003 = cljs.core.next.call(null,fs__2975);
ret__2974 = G__3002;
fs__2975 = G__3003;
continue;
}
} else
{return ret__2974;
}
break;
}
};
var G__3001 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3001__delegate.call(this, args);
};
G__3001.cljs$lang$maxFixedArity = 0;
G__3001.cljs$lang$applyTo = (function (arglist__3004){
var args = cljs.core.seq( arglist__3004 );;
return G__3001__delegate.call(this, args);
});
return G__3001;
})()
;
};
var G__3000 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3000__delegate.call(this, f1, f2, f3, fs);
};
G__3000.cljs$lang$maxFixedArity = 3;
G__3000.cljs$lang$applyTo = (function (arglist__3005){
var f1 = cljs.core.first(arglist__3005);
var f2 = cljs.core.first(cljs.core.next(arglist__3005));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3005)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3005)));
return G__3000__delegate.call(this, f1, f2, f3, fs);
});
return G__3000;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2976.call(this);
case  1 :
return comp__2977.call(this,f1);
case  2 :
return comp__2978.call(this,f1,f2);
case  3 :
return comp__2979.call(this,f1,f2,f3);
default:
return comp__2980.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2980.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3006 = (function (f,arg1){
return (function() { 
var G__3011__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3011 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3011__delegate.call(this, args);
};
G__3011.cljs$lang$maxFixedArity = 0;
G__3011.cljs$lang$applyTo = (function (arglist__3012){
var args = cljs.core.seq( arglist__3012 );;
return G__3011__delegate.call(this, args);
});
return G__3011;
})()
;
});
var partial__3007 = (function (f,arg1,arg2){
return (function() { 
var G__3013__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3013 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3013__delegate.call(this, args);
};
G__3013.cljs$lang$maxFixedArity = 0;
G__3013.cljs$lang$applyTo = (function (arglist__3014){
var args = cljs.core.seq( arglist__3014 );;
return G__3013__delegate.call(this, args);
});
return G__3013;
})()
;
});
var partial__3008 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3015__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3015 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3015__delegate.call(this, args);
};
G__3015.cljs$lang$maxFixedArity = 0;
G__3015.cljs$lang$applyTo = (function (arglist__3016){
var args = cljs.core.seq( arglist__3016 );;
return G__3015__delegate.call(this, args);
});
return G__3015;
})()
;
});
var partial__3009 = (function() { 
var G__3017__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3018__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3018 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3018__delegate.call(this, args);
};
G__3018.cljs$lang$maxFixedArity = 0;
G__3018.cljs$lang$applyTo = (function (arglist__3019){
var args = cljs.core.seq( arglist__3019 );;
return G__3018__delegate.call(this, args);
});
return G__3018;
})()
;
};
var G__3017 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3017__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3017.cljs$lang$maxFixedArity = 4;
G__3017.cljs$lang$applyTo = (function (arglist__3020){
var f = cljs.core.first(arglist__3020);
var arg1 = cljs.core.first(cljs.core.next(arglist__3020));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3020)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3020))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3020))));
return G__3017__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3017;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3006.call(this,f,arg1);
case  3 :
return partial__3007.call(this,f,arg1,arg2);
case  4 :
return partial__3008.call(this,f,arg1,arg2,arg3);
default:
return partial__3009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3009.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3021 = (function (f,x){
return (function() {
var G__3025 = null;
var G__3025__3026 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3025__3027 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3025__3028 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3025__3029 = (function() { 
var G__3031__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3031 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3031__delegate.call(this, a, b, c, ds);
};
G__3031.cljs$lang$maxFixedArity = 3;
G__3031.cljs$lang$applyTo = (function (arglist__3032){
var a = cljs.core.first(arglist__3032);
var b = cljs.core.first(cljs.core.next(arglist__3032));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3032)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3032)));
return G__3031__delegate.call(this, a, b, c, ds);
});
return G__3031;
})()
;
G__3025 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3025__3026.call(this,a);
case  2 :
return G__3025__3027.call(this,a,b);
case  3 :
return G__3025__3028.call(this,a,b,c);
default:
return G__3025__3029.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3025.cljs$lang$maxFixedArity = 3;
G__3025.cljs$lang$applyTo = G__3025__3029.cljs$lang$applyTo;
return G__3025;
})()
});
var fnil__3022 = (function (f,x,y){
return (function() {
var G__3033 = null;
var G__3033__3034 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3033__3035 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3033__3036 = (function() { 
var G__3038__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3038 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3038__delegate.call(this, a, b, c, ds);
};
G__3038.cljs$lang$maxFixedArity = 3;
G__3038.cljs$lang$applyTo = (function (arglist__3039){
var a = cljs.core.first(arglist__3039);
var b = cljs.core.first(cljs.core.next(arglist__3039));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3039)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3039)));
return G__3038__delegate.call(this, a, b, c, ds);
});
return G__3038;
})()
;
G__3033 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3033__3034.call(this,a,b);
case  3 :
return G__3033__3035.call(this,a,b,c);
default:
return G__3033__3036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3033.cljs$lang$maxFixedArity = 3;
G__3033.cljs$lang$applyTo = G__3033__3036.cljs$lang$applyTo;
return G__3033;
})()
});
var fnil__3023 = (function (f,x,y,z){
return (function() {
var G__3040 = null;
var G__3040__3041 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3040__3042 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3040__3043 = (function() { 
var G__3045__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3045 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3045__delegate.call(this, a, b, c, ds);
};
G__3045.cljs$lang$maxFixedArity = 3;
G__3045.cljs$lang$applyTo = (function (arglist__3046){
var a = cljs.core.first(arglist__3046);
var b = cljs.core.first(cljs.core.next(arglist__3046));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3046)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3046)));
return G__3045__delegate.call(this, a, b, c, ds);
});
return G__3045;
})()
;
G__3040 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3040__3041.call(this,a,b);
case  3 :
return G__3040__3042.call(this,a,b,c);
default:
return G__3040__3043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3040.cljs$lang$maxFixedArity = 3;
G__3040.cljs$lang$applyTo = G__3040__3043.cljs$lang$applyTo;
return G__3040;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3021.call(this,f,x);
case  3 :
return fnil__3022.call(this,f,x,y);
case  4 :
return fnil__3023.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3049 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3047 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3047))
{var s__3048 = temp__3698__auto____3047;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3048)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3048)));
} else
{return null;
}
})));
});

return mapi__3049.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3050 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3050))
{var s__3051 = temp__3698__auto____3050;

var x__3052 = f.call(null,cljs.core.first.call(null,s__3051));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3052)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3051));
} else
{return cljs.core.cons.call(null,x__3052,keep.call(null,f,cljs.core.rest.call(null,s__3051)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3062 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3059 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3059))
{var s__3060 = temp__3698__auto____3059;

var x__3061 = f.call(null,idx,cljs.core.first.call(null,s__3060));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3061)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3060));
} else
{return cljs.core.cons.call(null,x__3061,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3060)));
}
} else
{return null;
}
})));
});

return keepi__3062.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3107 = (function (p){
return (function() {
var ep1 = null;
var ep1__3112 = (function (){
return true;
});
var ep1__3113 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3114 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3069 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3069))
{return p.call(null,y);
} else
{return and__3546__auto____3069;
}
})());
});
var ep1__3115 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3070 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3070))
{var and__3546__auto____3071 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3071))
{return p.call(null,z);
} else
{return and__3546__auto____3071;
}
} else
{return and__3546__auto____3070;
}
})());
});
var ep1__3116 = (function() { 
var G__3118__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3072 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3072))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3072;
}
})());
};
var G__3118 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3118__delegate.call(this, x, y, z, args);
};
G__3118.cljs$lang$maxFixedArity = 3;
G__3118.cljs$lang$applyTo = (function (arglist__3119){
var x = cljs.core.first(arglist__3119);
var y = cljs.core.first(cljs.core.next(arglist__3119));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3119)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3119)));
return G__3118__delegate.call(this, x, y, z, args);
});
return G__3118;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3112.call(this);
case  1 :
return ep1__3113.call(this,x);
case  2 :
return ep1__3114.call(this,x,y);
case  3 :
return ep1__3115.call(this,x,y,z);
default:
return ep1__3116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3116.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3108 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3120 = (function (){
return true;
});
var ep2__3121 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3073 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3073))
{return p2.call(null,x);
} else
{return and__3546__auto____3073;
}
})());
});
var ep2__3122 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3074 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3074))
{var and__3546__auto____3075 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3075))
{var and__3546__auto____3076 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3076))
{return p2.call(null,y);
} else
{return and__3546__auto____3076;
}
} else
{return and__3546__auto____3075;
}
} else
{return and__3546__auto____3074;
}
})());
});
var ep2__3123 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3077 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3077))
{var and__3546__auto____3078 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3078))
{var and__3546__auto____3079 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3079))
{var and__3546__auto____3080 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3080))
{var and__3546__auto____3081 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3081))
{return p2.call(null,z);
} else
{return and__3546__auto____3081;
}
} else
{return and__3546__auto____3080;
}
} else
{return and__3546__auto____3079;
}
} else
{return and__3546__auto____3078;
}
} else
{return and__3546__auto____3077;
}
})());
});
var ep2__3124 = (function() { 
var G__3126__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3082 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3082))
{return cljs.core.every_QMARK_.call(null,(function (p1__3053_SHARP_){
var and__3546__auto____3083 = p1.call(null,p1__3053_SHARP_);

if(cljs.core.truth_(and__3546__auto____3083))
{return p2.call(null,p1__3053_SHARP_);
} else
{return and__3546__auto____3083;
}
}),args);
} else
{return and__3546__auto____3082;
}
})());
};
var G__3126 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3126__delegate.call(this, x, y, z, args);
};
G__3126.cljs$lang$maxFixedArity = 3;
G__3126.cljs$lang$applyTo = (function (arglist__3127){
var x = cljs.core.first(arglist__3127);
var y = cljs.core.first(cljs.core.next(arglist__3127));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3127)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3127)));
return G__3126__delegate.call(this, x, y, z, args);
});
return G__3126;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3120.call(this);
case  1 :
return ep2__3121.call(this,x);
case  2 :
return ep2__3122.call(this,x,y);
case  3 :
return ep2__3123.call(this,x,y,z);
default:
return ep2__3124.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3124.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3109 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3128 = (function (){
return true;
});
var ep3__3129 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3084 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3084))
{var and__3546__auto____3085 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3085))
{return p3.call(null,x);
} else
{return and__3546__auto____3085;
}
} else
{return and__3546__auto____3084;
}
})());
});
var ep3__3130 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3086 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3086))
{var and__3546__auto____3087 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3087))
{var and__3546__auto____3088 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3088))
{var and__3546__auto____3089 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3089))
{var and__3546__auto____3090 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3090))
{return p3.call(null,y);
} else
{return and__3546__auto____3090;
}
} else
{return and__3546__auto____3089;
}
} else
{return and__3546__auto____3088;
}
} else
{return and__3546__auto____3087;
}
} else
{return and__3546__auto____3086;
}
})());
});
var ep3__3131 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3091 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3091))
{var and__3546__auto____3092 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3092))
{var and__3546__auto____3093 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3093))
{var and__3546__auto____3094 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3094))
{var and__3546__auto____3095 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3095))
{var and__3546__auto____3096 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3096))
{var and__3546__auto____3097 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3097))
{var and__3546__auto____3098 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3098))
{return p3.call(null,z);
} else
{return and__3546__auto____3098;
}
} else
{return and__3546__auto____3097;
}
} else
{return and__3546__auto____3096;
}
} else
{return and__3546__auto____3095;
}
} else
{return and__3546__auto____3094;
}
} else
{return and__3546__auto____3093;
}
} else
{return and__3546__auto____3092;
}
} else
{return and__3546__auto____3091;
}
})());
});
var ep3__3132 = (function() { 
var G__3134__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3099 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3099))
{return cljs.core.every_QMARK_.call(null,(function (p1__3054_SHARP_){
var and__3546__auto____3100 = p1.call(null,p1__3054_SHARP_);

if(cljs.core.truth_(and__3546__auto____3100))
{var and__3546__auto____3101 = p2.call(null,p1__3054_SHARP_);

if(cljs.core.truth_(and__3546__auto____3101))
{return p3.call(null,p1__3054_SHARP_);
} else
{return and__3546__auto____3101;
}
} else
{return and__3546__auto____3100;
}
}),args);
} else
{return and__3546__auto____3099;
}
})());
};
var G__3134 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3134__delegate.call(this, x, y, z, args);
};
G__3134.cljs$lang$maxFixedArity = 3;
G__3134.cljs$lang$applyTo = (function (arglist__3135){
var x = cljs.core.first(arglist__3135);
var y = cljs.core.first(cljs.core.next(arglist__3135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3135)));
return G__3134__delegate.call(this, x, y, z, args);
});
return G__3134;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3128.call(this);
case  1 :
return ep3__3129.call(this,x);
case  2 :
return ep3__3130.call(this,x,y);
case  3 :
return ep3__3131.call(this,x,y,z);
default:
return ep3__3132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3132.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3110 = (function() { 
var G__3136__delegate = function (p1,p2,p3,ps){
var ps__3102 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3137 = (function (){
return true;
});
var epn__3138 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3055_SHARP_){
return p1__3055_SHARP_.call(null,x);
}),ps__3102);
});
var epn__3139 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3056_SHARP_){
var and__3546__auto____3103 = p1__3056_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3103))
{return p1__3056_SHARP_.call(null,y);
} else
{return and__3546__auto____3103;
}
}),ps__3102);
});
var epn__3140 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3057_SHARP_){
var and__3546__auto____3104 = p1__3057_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3104))
{var and__3546__auto____3105 = p1__3057_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3105))
{return p1__3057_SHARP_.call(null,z);
} else
{return and__3546__auto____3105;
}
} else
{return and__3546__auto____3104;
}
}),ps__3102);
});
var epn__3141 = (function() { 
var G__3143__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3106 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3106))
{return cljs.core.every_QMARK_.call(null,(function (p1__3058_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3058_SHARP_,args);
}),ps__3102);
} else
{return and__3546__auto____3106;
}
})());
};
var G__3143 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3143__delegate.call(this, x, y, z, args);
};
G__3143.cljs$lang$maxFixedArity = 3;
G__3143.cljs$lang$applyTo = (function (arglist__3144){
var x = cljs.core.first(arglist__3144);
var y = cljs.core.first(cljs.core.next(arglist__3144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3144)));
return G__3143__delegate.call(this, x, y, z, args);
});
return G__3143;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3137.call(this);
case  1 :
return epn__3138.call(this,x);
case  2 :
return epn__3139.call(this,x,y);
case  3 :
return epn__3140.call(this,x,y,z);
default:
return epn__3141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3141.cljs$lang$applyTo;
return epn;
})()
};
var G__3136 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3136__delegate.call(this, p1, p2, p3, ps);
};
G__3136.cljs$lang$maxFixedArity = 3;
G__3136.cljs$lang$applyTo = (function (arglist__3145){
var p1 = cljs.core.first(arglist__3145);
var p2 = cljs.core.first(cljs.core.next(arglist__3145));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3145)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3145)));
return G__3136__delegate.call(this, p1, p2, p3, ps);
});
return G__3136;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3107.call(this,p1);
case  2 :
return every_pred__3108.call(this,p1,p2);
case  3 :
return every_pred__3109.call(this,p1,p2,p3);
default:
return every_pred__3110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3110.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3185 = (function (p){
return (function() {
var sp1 = null;
var sp1__3190 = (function (){
return null;
});
var sp1__3191 = (function (x){
return p.call(null,x);
});
var sp1__3192 = (function (x,y){
var or__3548__auto____3147 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3147))
{return or__3548__auto____3147;
} else
{return p.call(null,y);
}
});
var sp1__3193 = (function (x,y,z){
var or__3548__auto____3148 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{var or__3548__auto____3149 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3149))
{return or__3548__auto____3149;
} else
{return p.call(null,z);
}
}
});
var sp1__3194 = (function() { 
var G__3196__delegate = function (x,y,z,args){
var or__3548__auto____3150 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3150))
{return or__3548__auto____3150;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3196 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3196__delegate.call(this, x, y, z, args);
};
G__3196.cljs$lang$maxFixedArity = 3;
G__3196.cljs$lang$applyTo = (function (arglist__3197){
var x = cljs.core.first(arglist__3197);
var y = cljs.core.first(cljs.core.next(arglist__3197));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3197)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3197)));
return G__3196__delegate.call(this, x, y, z, args);
});
return G__3196;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3190.call(this);
case  1 :
return sp1__3191.call(this,x);
case  2 :
return sp1__3192.call(this,x,y);
case  3 :
return sp1__3193.call(this,x,y,z);
default:
return sp1__3194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3194.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3186 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3198 = (function (){
return null;
});
var sp2__3199 = (function (x){
var or__3548__auto____3151 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{return p2.call(null,x);
}
});
var sp2__3200 = (function (x,y){
var or__3548__auto____3152 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3152))
{return or__3548__auto____3152;
} else
{var or__3548__auto____3153 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3153))
{return or__3548__auto____3153;
} else
{var or__3548__auto____3154 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3201 = (function (x,y,z){
var or__3548__auto____3155 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3155))
{return or__3548__auto____3155;
} else
{var or__3548__auto____3156 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3156))
{return or__3548__auto____3156;
} else
{var or__3548__auto____3157 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3157))
{return or__3548__auto____3157;
} else
{var or__3548__auto____3158 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3158))
{return or__3548__auto____3158;
} else
{var or__3548__auto____3159 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3159))
{return or__3548__auto____3159;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3202 = (function() { 
var G__3204__delegate = function (x,y,z,args){
var or__3548__auto____3160 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3160))
{return or__3548__auto____3160;
} else
{return cljs.core.some.call(null,(function (p1__3063_SHARP_){
var or__3548__auto____3161 = p1.call(null,p1__3063_SHARP_);

if(cljs.core.truth_(or__3548__auto____3161))
{return or__3548__auto____3161;
} else
{return p2.call(null,p1__3063_SHARP_);
}
}),args);
}
};
var G__3204 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3204__delegate.call(this, x, y, z, args);
};
G__3204.cljs$lang$maxFixedArity = 3;
G__3204.cljs$lang$applyTo = (function (arglist__3205){
var x = cljs.core.first(arglist__3205);
var y = cljs.core.first(cljs.core.next(arglist__3205));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3205)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3205)));
return G__3204__delegate.call(this, x, y, z, args);
});
return G__3204;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3198.call(this);
case  1 :
return sp2__3199.call(this,x);
case  2 :
return sp2__3200.call(this,x,y);
case  3 :
return sp2__3201.call(this,x,y,z);
default:
return sp2__3202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3202.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3187 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3206 = (function (){
return null;
});
var sp3__3207 = (function (x){
var or__3548__auto____3162 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3162))
{return or__3548__auto____3162;
} else
{var or__3548__auto____3163 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3163))
{return or__3548__auto____3163;
} else
{return p3.call(null,x);
}
}
});
var sp3__3208 = (function (x,y){
var or__3548__auto____3164 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3164))
{return or__3548__auto____3164;
} else
{var or__3548__auto____3165 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3165))
{return or__3548__auto____3165;
} else
{var or__3548__auto____3166 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3166))
{return or__3548__auto____3166;
} else
{var or__3548__auto____3167 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3167))
{return or__3548__auto____3167;
} else
{var or__3548__auto____3168 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3168))
{return or__3548__auto____3168;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3209 = (function (x,y,z){
var or__3548__auto____3169 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{var or__3548__auto____3170 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3170))
{return or__3548__auto____3170;
} else
{var or__3548__auto____3171 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3171))
{return or__3548__auto____3171;
} else
{var or__3548__auto____3172 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{var or__3548__auto____3173 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{var or__3548__auto____3174 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3174))
{return or__3548__auto____3174;
} else
{var or__3548__auto____3175 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{var or__3548__auto____3176 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3210 = (function() { 
var G__3212__delegate = function (x,y,z,args){
var or__3548__auto____3177 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{return cljs.core.some.call(null,(function (p1__3064_SHARP_){
var or__3548__auto____3178 = p1.call(null,p1__3064_SHARP_);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{var or__3548__auto____3179 = p2.call(null,p1__3064_SHARP_);

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{return p3.call(null,p1__3064_SHARP_);
}
}
}),args);
}
};
var G__3212 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3212__delegate.call(this, x, y, z, args);
};
G__3212.cljs$lang$maxFixedArity = 3;
G__3212.cljs$lang$applyTo = (function (arglist__3213){
var x = cljs.core.first(arglist__3213);
var y = cljs.core.first(cljs.core.next(arglist__3213));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3213)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3213)));
return G__3212__delegate.call(this, x, y, z, args);
});
return G__3212;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3206.call(this);
case  1 :
return sp3__3207.call(this,x);
case  2 :
return sp3__3208.call(this,x,y);
case  3 :
return sp3__3209.call(this,x,y,z);
default:
return sp3__3210.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3210.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3188 = (function() { 
var G__3214__delegate = function (p1,p2,p3,ps){
var ps__3180 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3215 = (function (){
return null;
});
var spn__3216 = (function (x){
return cljs.core.some.call(null,(function (p1__3065_SHARP_){
return p1__3065_SHARP_.call(null,x);
}),ps__3180);
});
var spn__3217 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3066_SHARP_){
var or__3548__auto____3181 = p1__3066_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{return p1__3066_SHARP_.call(null,y);
}
}),ps__3180);
});
var spn__3218 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3067_SHARP_){
var or__3548__auto____3182 = p1__3067_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3182))
{return or__3548__auto____3182;
} else
{var or__3548__auto____3183 = p1__3067_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{return p1__3067_SHARP_.call(null,z);
}
}
}),ps__3180);
});
var spn__3219 = (function() { 
var G__3221__delegate = function (x,y,z,args){
var or__3548__auto____3184 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{return cljs.core.some.call(null,(function (p1__3068_SHARP_){
return cljs.core.some.call(null,p1__3068_SHARP_,args);
}),ps__3180);
}
};
var G__3221 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3221__delegate.call(this, x, y, z, args);
};
G__3221.cljs$lang$maxFixedArity = 3;
G__3221.cljs$lang$applyTo = (function (arglist__3222){
var x = cljs.core.first(arglist__3222);
var y = cljs.core.first(cljs.core.next(arglist__3222));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3222)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3222)));
return G__3221__delegate.call(this, x, y, z, args);
});
return G__3221;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3215.call(this);
case  1 :
return spn__3216.call(this,x);
case  2 :
return spn__3217.call(this,x,y);
case  3 :
return spn__3218.call(this,x,y,z);
default:
return spn__3219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3219.cljs$lang$applyTo;
return spn;
})()
};
var G__3214 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3214__delegate.call(this, p1, p2, p3, ps);
};
G__3214.cljs$lang$maxFixedArity = 3;
G__3214.cljs$lang$applyTo = (function (arglist__3223){
var p1 = cljs.core.first(arglist__3223);
var p2 = cljs.core.first(cljs.core.next(arglist__3223));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3223)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3223)));
return G__3214__delegate.call(this, p1, p2, p3, ps);
});
return G__3214;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3185.call(this,p1);
case  2 :
return some_fn__3186.call(this,p1,p2);
case  3 :
return some_fn__3187.call(this,p1,p2,p3);
default:
return some_fn__3188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3188.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3236 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3224 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3224))
{var s__3225 = temp__3698__auto____3224;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3225)),map.call(null,f,cljs.core.rest.call(null,s__3225)));
} else
{return null;
}
})));
});
var map__3237 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3226 = cljs.core.seq.call(null,c1);
var s2__3227 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3228 = s1__3226;

if(cljs.core.truth_(and__3546__auto____3228))
{return s2__3227;
} else
{return and__3546__auto____3228;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3226),cljs.core.first.call(null,s2__3227)),map.call(null,f,cljs.core.rest.call(null,s1__3226),cljs.core.rest.call(null,s2__3227)));
} else
{return null;
}
})));
});
var map__3238 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3229 = cljs.core.seq.call(null,c1);
var s2__3230 = cljs.core.seq.call(null,c2);
var s3__3231 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3232 = s1__3229;

if(cljs.core.truth_(and__3546__auto____3232))
{var and__3546__auto____3233 = s2__3230;

if(cljs.core.truth_(and__3546__auto____3233))
{return s3__3231;
} else
{return and__3546__auto____3233;
}
} else
{return and__3546__auto____3232;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3229),cljs.core.first.call(null,s2__3230),cljs.core.first.call(null,s3__3231)),map.call(null,f,cljs.core.rest.call(null,s1__3229),cljs.core.rest.call(null,s2__3230),cljs.core.rest.call(null,s3__3231)));
} else
{return null;
}
})));
});
var map__3239 = (function() { 
var G__3241__delegate = function (f,c1,c2,c3,colls){
var step__3235 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3234 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3234)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3234),step.call(null,map.call(null,cljs.core.rest,ss__3234)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3146_SHARP_){
return cljs.core.apply.call(null,f,p1__3146_SHARP_);
}),step__3235.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3241 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3241__delegate.call(this, f, c1, c2, c3, colls);
};
G__3241.cljs$lang$maxFixedArity = 4;
G__3241.cljs$lang$applyTo = (function (arglist__3242){
var f = cljs.core.first(arglist__3242);
var c1 = cljs.core.first(cljs.core.next(arglist__3242));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3242)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3242))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3242))));
return G__3241__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3241;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3236.call(this,f,c1);
case  3 :
return map__3237.call(this,f,c1,c2);
case  4 :
return map__3238.call(this,f,c1,c2,c3);
default:
return map__3239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3239.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3243 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3243))
{var s__3244 = temp__3698__auto____3243;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3244),take.call(null,(n - 1),cljs.core.rest.call(null,s__3244)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3247 = (function (n,coll){
while(true){
var s__3245 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3246 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3246))
{return s__3245;
} else
{return and__3546__auto____3246;
}
})()))
{{
var G__3248 = (n - 1);
var G__3249 = cljs.core.rest.call(null,s__3245);
n = G__3248;
coll = G__3249;
continue;
}
} else
{return s__3245;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3247.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3250 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3251 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3250.call(this,n);
case  2 :
return drop_last__3251.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3253 = cljs.core.seq.call(null,coll);
var lead__3254 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3254))
{{
var G__3255 = cljs.core.next.call(null,s__3253);
var G__3256 = cljs.core.next.call(null,lead__3254);
s__3253 = G__3255;
lead__3254 = G__3256;
continue;
}
} else
{return s__3253;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3259 = (function (pred,coll){
while(true){
var s__3257 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3258 = s__3257;

if(cljs.core.truth_(and__3546__auto____3258))
{return pred.call(null,cljs.core.first.call(null,s__3257));
} else
{return and__3546__auto____3258;
}
})()))
{{
var G__3260 = pred;
var G__3261 = cljs.core.rest.call(null,s__3257);
pred = G__3260;
coll = G__3261;
continue;
}
} else
{return s__3257;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3259.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3262 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3262))
{var s__3263 = temp__3698__auto____3262;

return cljs.core.concat.call(null,s__3263,cycle.call(null,s__3263));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3264 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3265 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3264.call(this,n);
case  2 :
return repeat__3265.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3267 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3268 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3267.call(this,n);
case  2 :
return repeatedly__3268.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3274 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3270 = cljs.core.seq.call(null,c1);
var s2__3271 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3272 = s1__3270;

if(cljs.core.truth_(and__3546__auto____3272))
{return s2__3271;
} else
{return and__3546__auto____3272;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3270),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3271),interleave.call(null,cljs.core.rest.call(null,s1__3270),cljs.core.rest.call(null,s2__3271))));
} else
{return null;
}
})));
});
var interleave__3275 = (function() { 
var G__3277__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3273 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3273)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3273),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3273)));
} else
{return null;
}
})));
};
var G__3277 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3277__delegate.call(this, c1, c2, colls);
};
G__3277.cljs$lang$maxFixedArity = 2;
G__3277.cljs$lang$applyTo = (function (arglist__3278){
var c1 = cljs.core.first(arglist__3278);
var c2 = cljs.core.first(cljs.core.next(arglist__3278));
var colls = cljs.core.rest(cljs.core.next(arglist__3278));
return G__3277__delegate.call(this, c1, c2, colls);
});
return G__3277;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3274.call(this,c1,c2);
default:
return interleave__3275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3275.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3281 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3279 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3279))
{var coll__3280 = temp__3695__auto____3279;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3280),cat.call(null,cljs.core.rest.call(null,coll__3280),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3281.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3282 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3283 = (function() { 
var G__3285__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3285 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3285__delegate.call(this, f, coll, colls);
};
G__3285.cljs$lang$maxFixedArity = 2;
G__3285.cljs$lang$applyTo = (function (arglist__3286){
var f = cljs.core.first(arglist__3286);
var coll = cljs.core.first(cljs.core.next(arglist__3286));
var colls = cljs.core.rest(cljs.core.next(arglist__3286));
return G__3285__delegate.call(this, f, coll, colls);
});
return G__3285;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3282.call(this,f,coll);
default:
return mapcat__3283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3283.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3287 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3287))
{var s__3288 = temp__3698__auto____3287;

var f__3289 = cljs.core.first.call(null,s__3288);
var r__3290 = cljs.core.rest.call(null,s__3288);

if(cljs.core.truth_(pred.call(null,f__3289)))
{return cljs.core.cons.call(null,f__3289,filter.call(null,pred,r__3290));
} else
{return filter.call(null,pred,r__3290);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3292 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3292.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3291_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3291_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3299 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3300 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3293 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3293))
{var s__3294 = temp__3698__auto____3293;

var p__3295 = cljs.core.take.call(null,n,s__3294);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3295))))
{return cljs.core.cons.call(null,p__3295,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3294)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3301 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3296 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3296))
{var s__3297 = temp__3698__auto____3296;

var p__3298 = cljs.core.take.call(null,n,s__3297);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3298))))
{return cljs.core.cons.call(null,p__3298,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3297)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3298,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3299.call(this,n,step);
case  3 :
return partition__3300.call(this,n,step,pad);
case  4 :
return partition__3301.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3307 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3308 = (function (m,ks,not_found){
var sentinel__3303 = cljs.core.lookup_sentinel;
var m__3304 = m;
var ks__3305 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3305))
{var m__3306 = cljs.core.get.call(null,m__3304,cljs.core.first.call(null,ks__3305),sentinel__3303);

if(cljs.core.truth_((sentinel__3303 === m__3306)))
{return not_found;
} else
{{
var G__3310 = sentinel__3303;
var G__3311 = m__3306;
var G__3312 = cljs.core.next.call(null,ks__3305);
sentinel__3303 = G__3310;
m__3304 = G__3311;
ks__3305 = G__3312;
continue;
}
}
} else
{return m__3304;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3307.call(this,m,ks);
case  3 :
return get_in__3308.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3313,v){
var vec__3314__3315 = p__3313;
var k__3316 = cljs.core.nth.call(null,vec__3314__3315,0,null);
var ks__3317 = cljs.core.nthnext.call(null,vec__3314__3315,1);

if(cljs.core.truth_(ks__3317))
{return cljs.core.assoc.call(null,m,k__3316,assoc_in.call(null,cljs.core.get.call(null,m,k__3316),ks__3317,v));
} else
{return cljs.core.assoc.call(null,m,k__3316,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3318,f,args){
var vec__3319__3320 = p__3318;
var k__3321 = cljs.core.nth.call(null,vec__3319__3320,0,null);
var ks__3322 = cljs.core.nthnext.call(null,vec__3319__3320,1);

if(cljs.core.truth_(ks__3322))
{return cljs.core.assoc.call(null,m,k__3321,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3321),ks__3322,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3321,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3321),args));
}
};
var update_in = function (m,p__3318,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3318, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3323){
var m = cljs.core.first(arglist__3323);
var p__3318 = cljs.core.first(cljs.core.next(arglist__3323));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3323)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3323)));
return update_in__delegate.call(this, m, p__3318, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3324 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3349 = null;
var G__3349__3350 = (function (coll,k){
var this__3325 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3349__3351 = (function (coll,k,not_found){
var this__3326 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3349 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3349__3350.call(this,coll,k);
case  3 :
return G__3349__3351.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3349;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3327 = this;
var new_array__3328 = cljs.core.aclone.call(null,this__3327.array);

(new_array__3328[k] = v);
return (new cljs.core.Vector(this__3327.meta,new_array__3328));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3329 = this;
var new_array__3330 = cljs.core.aclone.call(null,this__3329.array);

new_array__3330.push(o);
return (new cljs.core.Vector(this__3329.meta,new_array__3330));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3353 = null;
var G__3353__3354 = (function (v,f){
var this__3331 = this;
return cljs.core.ci_reduce.call(null,this__3331.array,f);
});
var G__3353__3355 = (function (v,f,start){
var this__3332 = this;
return cljs.core.ci_reduce.call(null,this__3332.array,f,start);
});
G__3353 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3353__3354.call(this,v,f);
case  3 :
return G__3353__3355.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3353;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3333 = this;
if(cljs.core.truth_((this__3333.array.length > 0)))
{var vector_seq__3334 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3333.array.length)))
{return cljs.core.cons.call(null,(this__3333.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3334.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3335 = this;
return this__3335.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3336 = this;
var count__3337 = this__3336.array.length;

if(cljs.core.truth_((count__3337 > 0)))
{return (this__3336.array[(count__3337 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3338 = this;
if(cljs.core.truth_((this__3338.array.length > 0)))
{var new_array__3339 = cljs.core.aclone.call(null,this__3338.array);

new_array__3339.pop();
return (new cljs.core.Vector(this__3338.meta,new_array__3339));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3340 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3341 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3342 = this;
return (new cljs.core.Vector(meta,this__3342.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3343 = this;
return this__3343.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3357 = null;
var G__3357__3358 = (function (coll,n){
var this__3344 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3345 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3345))
{return (n < this__3344.array.length);
} else
{return and__3546__auto____3345;
}
})()))
{return (this__3344.array[n]);
} else
{return null;
}
});
var G__3357__3359 = (function (coll,n,not_found){
var this__3346 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3347 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3347))
{return (n < this__3346.array.length);
} else
{return and__3546__auto____3347;
}
})()))
{return (this__3346.array[n]);
} else
{return not_found;
}
});
G__3357 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3357__3358.call(this,coll,n);
case  3 :
return G__3357__3359.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3357;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3348 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3348.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3361 = null;
var G__3361__3362 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3361__3363 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3361 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3361__3362.call(this,_,k);
case  3 :
return G__3361__3363.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3361;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3365){
var args = cljs.core.seq( arglist__3365 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3366 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3386 = null;
var G__3386__3387 = (function (coll,k){
var this__3367 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3386__3388 = (function (coll,k,not_found){
var this__3368 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3386 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3386__3387.call(this,coll,k);
case  3 :
return G__3386__3388.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3386;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3369 = this;
var v_pos__3370 = (this__3369.start + key);

return (new cljs.core.Subvec(this__3369.meta,cljs.core._assoc.call(null,this__3369.v,v_pos__3370,val),this__3369.start,((this__3369.end > (v_pos__3370 + 1)) ? this__3369.end : (v_pos__3370 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3371 = this;
return (new cljs.core.Subvec(this__3371.meta,cljs.core._assoc_n.call(null,this__3371.v,this__3371.end,o),this__3371.start,(this__3371.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3390 = null;
var G__3390__3391 = (function (coll,f){
var this__3372 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3390__3392 = (function (coll,f,start){
var this__3373 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3390 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3390__3391.call(this,coll,f);
case  3 :
return G__3390__3392.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3390;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3374 = this;
var subvec_seq__3375 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3374.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3374.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3375.call(null,this__3374.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3376 = this;
return (this__3376.end - this__3376.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3377 = this;
return cljs.core._nth.call(null,this__3377.v,(this__3377.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3378 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3378.start,this__3378.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3378.meta,this__3378.v,this__3378.start,(this__3378.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3379 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3380 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3381 = this;
return (new cljs.core.Subvec(meta,this__3381.v,this__3381.start,this__3381.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3382 = this;
return this__3382.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3394 = null;
var G__3394__3395 = (function (coll,n){
var this__3383 = this;
return cljs.core._nth.call(null,this__3383.v,(this__3383.start + n));
});
var G__3394__3396 = (function (coll,n,not_found){
var this__3384 = this;
return cljs.core._nth.call(null,this__3384.v,(this__3384.start + n),not_found);
});
G__3394 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3394__3395.call(this,coll,n);
case  3 :
return G__3394__3396.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3394;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3385 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3385.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__3398 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3399 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3398.call(this,v,start);
case  3 :
return subvec__3399.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3401 = null;
var G__3401__3402 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3401__3403 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3401 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3401__3402.call(this,_,k);
case  3 :
return G__3401__3403.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3401;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3405 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3406 = array.length;

var i__3407 = 0;

while(true){
if(cljs.core.truth_((i__3407 < len__3406)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3407]))))
{return i__3407;
} else
{{
var G__3408 = (i__3407 + incr);
i__3407 = G__3408;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3410 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3411 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3409 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3409))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3409;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3410.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3411.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3414 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3433 = null;
var G__3433__3434 = (function (coll,k){
var this__3415 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3433__3435 = (function (coll,k,not_found){
var this__3416 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3416.strobj,(this__3416.strobj[k]),not_found);
});
G__3433 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3433__3434.call(this,coll,k);
case  3 :
return G__3433__3435.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3433;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3417 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3418 = goog.object.clone.call(null,this__3417.strobj);
var overwrite_QMARK___3419 = new_strobj__3418.hasOwnProperty(k);

(new_strobj__3418[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3419))
{return (new cljs.core.ObjMap(this__3417.meta,this__3417.keys,new_strobj__3418));
} else
{var new_keys__3420 = cljs.core.aclone.call(null,this__3417.keys);

new_keys__3420.push(k);
return (new cljs.core.ObjMap(this__3417.meta,new_keys__3420,new_strobj__3418));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3417.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3421 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3421.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3422 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3423 = this;
if(cljs.core.truth_((this__3423.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3413_SHARP_){
return cljs.core.vector.call(null,p1__3413_SHARP_,(this__3423.strobj[p1__3413_SHARP_]));
}),this__3423.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3424 = this;
return this__3424.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3425 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3426 = this;
return (new cljs.core.ObjMap(meta,this__3426.keys,this__3426.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3427 = this;
return this__3427.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3428 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3428.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3429 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3430 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3430))
{return this__3429.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3430;
}
})()))
{var new_keys__3431 = cljs.core.aclone.call(null,this__3429.keys);
var new_strobj__3432 = goog.object.clone.call(null,this__3429.strobj);

new_keys__3431.splice(cljs.core.scan_array.call(null,1,k,new_keys__3431),1);
cljs.core.js_delete.call(null,new_strobj__3432,k);
return (new cljs.core.ObjMap(this__3429.meta,new_keys__3431,new_strobj__3432));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3438 = null;
var G__3438__3439 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3438__3440 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3438 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3438__3439.call(this,_,k);
case  3 :
return G__3438__3440.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3438;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3442 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3472 = null;
var G__3472__3473 = (function (coll,k){
var this__3443 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3472__3474 = (function (coll,k,not_found){
var this__3444 = this;
var bucket__3445 = (this__3444.hashobj[cljs.core.hash.call(null,k)]);
var i__3446 = (cljs.core.truth_(bucket__3445)?cljs.core.scan_array.call(null,2,k,bucket__3445):null);

if(cljs.core.truth_(i__3446))
{return (bucket__3445[(i__3446 + 1)]);
} else
{return not_found;
}
});
G__3472 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3472__3473.call(this,coll,k);
case  3 :
return G__3472__3474.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3472;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3447 = this;
var h__3448 = cljs.core.hash.call(null,k);
var bucket__3449 = (this__3447.hashobj[h__3448]);

if(cljs.core.truth_(bucket__3449))
{var new_bucket__3450 = cljs.core.aclone.call(null,bucket__3449);
var new_hashobj__3451 = goog.object.clone.call(null,this__3447.hashobj);

(new_hashobj__3451[h__3448] = new_bucket__3450);
var temp__3695__auto____3452 = cljs.core.scan_array.call(null,2,k,new_bucket__3450);

if(cljs.core.truth_(temp__3695__auto____3452))
{var i__3453 = temp__3695__auto____3452;

(new_bucket__3450[(i__3453 + 1)] = v);
return (new cljs.core.HashMap(this__3447.meta,this__3447.count,new_hashobj__3451));
} else
{new_bucket__3450.push(k,v);
return (new cljs.core.HashMap(this__3447.meta,(this__3447.count + 1),new_hashobj__3451));
}
} else
{var new_hashobj__3454 = goog.object.clone.call(null,this__3447.hashobj);

(new_hashobj__3454[h__3448] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3447.meta,(this__3447.count + 1),new_hashobj__3454));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3455 = this;
var bucket__3456 = (this__3455.hashobj[cljs.core.hash.call(null,k)]);
var i__3457 = (cljs.core.truth_(bucket__3456)?cljs.core.scan_array.call(null,2,k,bucket__3456):null);

if(cljs.core.truth_(i__3457))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3458 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3459 = this;
if(cljs.core.truth_((this__3459.count > 0)))
{var hashes__3460 = cljs.core.js_keys.call(null,this__3459.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3437_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3459.hashobj[p1__3437_SHARP_])));
}),hashes__3460);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3461 = this;
return this__3461.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3462 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3463 = this;
return (new cljs.core.HashMap(meta,this__3463.count,this__3463.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3464 = this;
return this__3464.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3465 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3465.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3466 = this;
var h__3467 = cljs.core.hash.call(null,k);
var bucket__3468 = (this__3466.hashobj[h__3467]);
var i__3469 = (cljs.core.truth_(bucket__3468)?cljs.core.scan_array.call(null,2,k,bucket__3468):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3469)))
{return coll;
} else
{var new_hashobj__3470 = goog.object.clone.call(null,this__3466.hashobj);

if(cljs.core.truth_((3 > bucket__3468.length)))
{cljs.core.js_delete.call(null,new_hashobj__3470,h__3467);
} else
{var new_bucket__3471 = cljs.core.aclone.call(null,bucket__3468);

new_bucket__3471.splice(i__3469,2);
(new_hashobj__3470[h__3467] = new_bucket__3471);
}
return (new cljs.core.HashMap(this__3466.meta,(this__3466.count - 1),new_hashobj__3470));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3476 = ks.length;

var i__3477 = 0;
var out__3478 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3477 < len__3476)))
{{
var G__3479 = (i__3477 + 1);
var G__3480 = cljs.core.assoc.call(null,out__3478,(ks[i__3477]),(vs[i__3477]));
i__3477 = G__3479;
out__3478 = G__3480;
continue;
}
} else
{return out__3478;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3481 = null;
var G__3481__3482 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3481__3483 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3481 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3481__3482.call(this,_,k);
case  3 :
return G__3481__3483.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3481;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3485 = cljs.core.seq.call(null,keyvals);
var out__3486 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3485))
{{
var G__3487 = cljs.core.nnext.call(null,in$__3485);
var G__3488 = cljs.core.assoc.call(null,out__3486,cljs.core.first.call(null,in$__3485),cljs.core.second.call(null,in$__3485));
in$__3485 = G__3487;
out__3486 = G__3488;
continue;
}
} else
{return out__3486;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3489){
var keyvals = cljs.core.seq( arglist__3489 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3490_SHARP_,p2__3491_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3492 = p1__3490_SHARP_;

if(cljs.core.truth_(or__3548__auto____3492))
{return or__3548__auto____3492;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3491_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3493){
var maps = cljs.core.seq( arglist__3493 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3496 = (function (m,e){
var k__3494 = cljs.core.first.call(null,e);
var v__3495 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3494)))
{return cljs.core.assoc.call(null,m,k__3494,f.call(null,cljs.core.get.call(null,m,k__3494),v__3495));
} else
{return cljs.core.assoc.call(null,m,k__3494,v__3495);
}
});
var merge2__3498 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3496,(function (){var or__3548__auto____3497 = m1;

if(cljs.core.truth_(or__3548__auto____3497))
{return or__3548__auto____3497;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3498,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3499){
var f = cljs.core.first(arglist__3499);
var maps = cljs.core.rest(arglist__3499);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3501 = cljs.core.ObjMap.fromObject([],{});
var keys__3502 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3502))
{var key__3503 = cljs.core.first.call(null,keys__3502);
var entry__3504 = cljs.core.get.call(null,map,key__3503,"﷐'user/not-found");

{
var G__3505 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3504,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3501,key__3503,entry__3504):ret__3501);
var G__3506 = cljs.core.next.call(null,keys__3502);
ret__3501 = G__3505;
keys__3502 = G__3506;
continue;
}
} else
{return ret__3501;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3507 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3520 = null;
var G__3520__3521 = (function (coll,v){
var this__3508 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3520__3522 = (function (coll,v,not_found){
var this__3509 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3509.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3520 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3520__3521.call(this,coll,v);
case  3 :
return G__3520__3522.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3520;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3510 = this;
return (new cljs.core.Set(this__3510.meta,cljs.core.assoc.call(null,this__3510.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3511 = this;
return cljs.core.keys.call(null,this__3511.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3512 = this;
return (new cljs.core.Set(this__3512.meta,cljs.core.dissoc.call(null,this__3512.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3513 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3514 = this;
var and__3546__auto____3515 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3515))
{var and__3546__auto____3516 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3516))
{return cljs.core.every_QMARK_.call(null,(function (p1__3500_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3500_SHARP_);
}),other);
} else
{return and__3546__auto____3516;
}
} else
{return and__3546__auto____3515;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3517 = this;
return (new cljs.core.Set(meta,this__3517.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3518 = this;
return this__3518.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3519 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3519.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3524 = null;
var G__3524__3525 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3524__3526 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3524 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3524__3525.call(this,_,k);
case  3 :
return G__3524__3526.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3524;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3529 = cljs.core.seq.call(null,coll);
var out__3530 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3529))))
{{
var G__3531 = cljs.core.rest.call(null,in$__3529);
var G__3532 = cljs.core.conj.call(null,out__3530,cljs.core.first.call(null,in$__3529));
in$__3529 = G__3531;
out__3530 = G__3532;
continue;
}
} else
{return out__3530;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3533 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3534 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3534))
{var e__3535 = temp__3695__auto____3534;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3535));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3533,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3528_SHARP_){
var temp__3695__auto____3536 = cljs.core.find.call(null,smap,p1__3528_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3536))
{var e__3537 = temp__3695__auto____3536;

return cljs.core.second.call(null,e__3537);
} else
{return p1__3528_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3545 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3538,seen){
while(true){
var vec__3539__3540 = p__3538;
var f__3541 = cljs.core.nth.call(null,vec__3539__3540,0,null);
var xs__3542 = vec__3539__3540;

var temp__3698__auto____3543 = cljs.core.seq.call(null,xs__3542);

if(cljs.core.truth_(temp__3698__auto____3543))
{var s__3544 = temp__3698__auto____3543;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3541)))
{{
var G__3546 = cljs.core.rest.call(null,s__3544);
var G__3547 = seen;
p__3538 = G__3546;
seen = G__3547;
continue;
}
} else
{return cljs.core.cons.call(null,f__3541,step.call(null,cljs.core.rest.call(null,s__3544),cljs.core.conj.call(null,seen,f__3541)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3545.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3548 = cljs.core.Vector.fromArray([]);
var s__3549 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3549)))
{{
var G__3550 = cljs.core.conj.call(null,ret__3548,cljs.core.first.call(null,s__3549));
var G__3551 = cljs.core.next.call(null,s__3549);
ret__3548 = G__3550;
s__3549 = G__3551;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3548);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3552 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3552))
{return or__3548__auto____3552;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3553 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3553 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3553 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3554 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3554))
{return or__3548__auto____3554;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3555 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3555 > -1)))
{return cljs.core.subs.call(null,x,2,i__3555);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3558 = cljs.core.ObjMap.fromObject([],{});
var ks__3559 = cljs.core.seq.call(null,keys);
var vs__3560 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3561 = ks__3559;

if(cljs.core.truth_(and__3546__auto____3561))
{return vs__3560;
} else
{return and__3546__auto____3561;
}
})()))
{{
var G__3562 = cljs.core.assoc.call(null,map__3558,cljs.core.first.call(null,ks__3559),cljs.core.first.call(null,vs__3560));
var G__3563 = cljs.core.next.call(null,ks__3559);
var G__3564 = cljs.core.next.call(null,vs__3560);
map__3558 = G__3562;
ks__3559 = G__3563;
vs__3560 = G__3564;
continue;
}
} else
{return map__3558;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3567 = (function (k,x){
return x;
});
var max_key__3568 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3569 = (function() { 
var G__3571__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3556_SHARP_,p2__3557_SHARP_){
return max_key.call(null,k,p1__3556_SHARP_,p2__3557_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3571 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3571__delegate.call(this, k, x, y, more);
};
G__3571.cljs$lang$maxFixedArity = 3;
G__3571.cljs$lang$applyTo = (function (arglist__3572){
var k = cljs.core.first(arglist__3572);
var x = cljs.core.first(cljs.core.next(arglist__3572));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3572)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3572)));
return G__3571__delegate.call(this, k, x, y, more);
});
return G__3571;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3567.call(this,k,x);
case  3 :
return max_key__3568.call(this,k,x,y);
default:
return max_key__3569.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3569.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3573 = (function (k,x){
return x;
});
var min_key__3574 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3575 = (function() { 
var G__3577__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3565_SHARP_,p2__3566_SHARP_){
return min_key.call(null,k,p1__3565_SHARP_,p2__3566_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3577 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3577__delegate.call(this, k, x, y, more);
};
G__3577.cljs$lang$maxFixedArity = 3;
G__3577.cljs$lang$applyTo = (function (arglist__3578){
var k = cljs.core.first(arglist__3578);
var x = cljs.core.first(cljs.core.next(arglist__3578));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3578)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3578)));
return G__3577__delegate.call(this, k, x, y, more);
});
return G__3577;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3573.call(this,k,x);
case  3 :
return min_key__3574.call(this,k,x,y);
default:
return min_key__3575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3575.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3581 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3582 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3579 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3579))
{var s__3580 = temp__3698__auto____3579;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3580),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3580)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3581.call(this,n,step);
case  3 :
return partition_all__3582.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3584 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3584))
{var s__3585 = temp__3698__auto____3584;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3585))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3585),take_while.call(null,pred,cljs.core.rest.call(null,s__3585)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3586 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3587 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3603 = null;
var G__3603__3604 = (function (rng,f){
var this__3588 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3603__3605 = (function (rng,f,s){
var this__3589 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3603 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3603__3604.call(this,rng,f);
case  3 :
return G__3603__3605.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3603;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3590 = this;
var comp__3591 = (cljs.core.truth_((this__3590.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3591.call(null,this__3590.start,this__3590.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3592 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3592.end - this__3592.start) / this__3592.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3593 = this;
return this__3593.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3594 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3594.meta,(this__3594.start + this__3594.step),this__3594.end,this__3594.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3595 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3596 = this;
return (new cljs.core.Range(meta,this__3596.start,this__3596.end,this__3596.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3597 = this;
return this__3597.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3607 = null;
var G__3607__3608 = (function (rng,n){
var this__3598 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3598.start + (n * this__3598.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3599 = (this__3598.start > this__3598.end);

if(cljs.core.truth_(and__3546__auto____3599))
{return cljs.core._EQ_.call(null,this__3598.step,0);
} else
{return and__3546__auto____3599;
}
})()))
{return this__3598.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3607__3609 = (function (rng,n,not_found){
var this__3600 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3600.start + (n * this__3600.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3601 = (this__3600.start > this__3600.end);

if(cljs.core.truth_(and__3546__auto____3601))
{return cljs.core._EQ_.call(null,this__3600.step,0);
} else
{return and__3546__auto____3601;
}
})()))
{return this__3600.start;
} else
{return not_found;
}
}
});
G__3607 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3607__3608.call(this,rng,n);
case  3 :
return G__3607__3609.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3607;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3602 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3602.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3611 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3612 = (function (end){
return range.call(null,0,end,1);
});
var range__3613 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3614 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3611.call(this);
case  1 :
return range__3612.call(this,start);
case  2 :
return range__3613.call(this,start,end);
case  3 :
return range__3614.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3616 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3616))
{var s__3617 = temp__3698__auto____3616;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3617),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3617)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3619 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3619))
{var s__3620 = temp__3698__auto____3619;

var fst__3621 = cljs.core.first.call(null,s__3620);
var fv__3622 = f.call(null,fst__3621);
var run__3623 = cljs.core.cons.call(null,fst__3621,cljs.core.take_while.call(null,(function (p1__3618_SHARP_){
return cljs.core._EQ_.call(null,fv__3622,f.call(null,p1__3618_SHARP_));
}),cljs.core.next.call(null,s__3620)));

return cljs.core.cons.call(null,run__3623,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3623),s__3620))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3638 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3634))
{var s__3635 = temp__3695__auto____3634;

return reductions.call(null,f,cljs.core.first.call(null,s__3635),cljs.core.rest.call(null,s__3635));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3639 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3636 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3636))
{var s__3637 = temp__3698__auto____3636;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3637)),cljs.core.rest.call(null,s__3637));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3638.call(this,f,init);
case  3 :
return reductions__3639.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3642 = (function (f){
return (function() {
var G__3647 = null;
var G__3647__3648 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3647__3649 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3647__3650 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3647__3651 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3647__3652 = (function() { 
var G__3654__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3654 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3654__delegate.call(this, x, y, z, args);
};
G__3654.cljs$lang$maxFixedArity = 3;
G__3654.cljs$lang$applyTo = (function (arglist__3655){
var x = cljs.core.first(arglist__3655);
var y = cljs.core.first(cljs.core.next(arglist__3655));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3655)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3655)));
return G__3654__delegate.call(this, x, y, z, args);
});
return G__3654;
})()
;
G__3647 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3647__3648.call(this);
case  1 :
return G__3647__3649.call(this,x);
case  2 :
return G__3647__3650.call(this,x,y);
case  3 :
return G__3647__3651.call(this,x,y,z);
default:
return G__3647__3652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3647.cljs$lang$maxFixedArity = 3;
G__3647.cljs$lang$applyTo = G__3647__3652.cljs$lang$applyTo;
return G__3647;
})()
});
var juxt__3643 = (function (f,g){
return (function() {
var G__3656 = null;
var G__3656__3657 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3656__3658 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3656__3659 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3656__3660 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3656__3661 = (function() { 
var G__3663__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3663 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3663__delegate.call(this, x, y, z, args);
};
G__3663.cljs$lang$maxFixedArity = 3;
G__3663.cljs$lang$applyTo = (function (arglist__3664){
var x = cljs.core.first(arglist__3664);
var y = cljs.core.first(cljs.core.next(arglist__3664));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3664)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3664)));
return G__3663__delegate.call(this, x, y, z, args);
});
return G__3663;
})()
;
G__3656 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3656__3657.call(this);
case  1 :
return G__3656__3658.call(this,x);
case  2 :
return G__3656__3659.call(this,x,y);
case  3 :
return G__3656__3660.call(this,x,y,z);
default:
return G__3656__3661.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3656.cljs$lang$maxFixedArity = 3;
G__3656.cljs$lang$applyTo = G__3656__3661.cljs$lang$applyTo;
return G__3656;
})()
});
var juxt__3644 = (function (f,g,h){
return (function() {
var G__3665 = null;
var G__3665__3666 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3665__3667 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3665__3668 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3665__3669 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3665__3670 = (function() { 
var G__3672__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3672 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3672__delegate.call(this, x, y, z, args);
};
G__3672.cljs$lang$maxFixedArity = 3;
G__3672.cljs$lang$applyTo = (function (arglist__3673){
var x = cljs.core.first(arglist__3673);
var y = cljs.core.first(cljs.core.next(arglist__3673));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3673)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3673)));
return G__3672__delegate.call(this, x, y, z, args);
});
return G__3672;
})()
;
G__3665 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3665__3666.call(this);
case  1 :
return G__3665__3667.call(this,x);
case  2 :
return G__3665__3668.call(this,x,y);
case  3 :
return G__3665__3669.call(this,x,y,z);
default:
return G__3665__3670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3665.cljs$lang$maxFixedArity = 3;
G__3665.cljs$lang$applyTo = G__3665__3670.cljs$lang$applyTo;
return G__3665;
})()
});
var juxt__3645 = (function() { 
var G__3674__delegate = function (f,g,h,fs){
var fs__3641 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3675 = null;
var G__3675__3676 = (function (){
return cljs.core.reduce.call(null,(function (p1__3624_SHARP_,p2__3625_SHARP_){
return cljs.core.conj.call(null,p1__3624_SHARP_,p2__3625_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3641);
});
var G__3675__3677 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3626_SHARP_,p2__3627_SHARP_){
return cljs.core.conj.call(null,p1__3626_SHARP_,p2__3627_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3641);
});
var G__3675__3678 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3628_SHARP_,p2__3629_SHARP_){
return cljs.core.conj.call(null,p1__3628_SHARP_,p2__3629_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3641);
});
var G__3675__3679 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3630_SHARP_,p2__3631_SHARP_){
return cljs.core.conj.call(null,p1__3630_SHARP_,p2__3631_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3641);
});
var G__3675__3680 = (function() { 
var G__3682__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3632_SHARP_,p2__3633_SHARP_){
return cljs.core.conj.call(null,p1__3632_SHARP_,cljs.core.apply.call(null,p2__3633_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3641);
};
var G__3682 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3682__delegate.call(this, x, y, z, args);
};
G__3682.cljs$lang$maxFixedArity = 3;
G__3682.cljs$lang$applyTo = (function (arglist__3683){
var x = cljs.core.first(arglist__3683);
var y = cljs.core.first(cljs.core.next(arglist__3683));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3683)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3683)));
return G__3682__delegate.call(this, x, y, z, args);
});
return G__3682;
})()
;
G__3675 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3675__3676.call(this);
case  1 :
return G__3675__3677.call(this,x);
case  2 :
return G__3675__3678.call(this,x,y);
case  3 :
return G__3675__3679.call(this,x,y,z);
default:
return G__3675__3680.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3675.cljs$lang$maxFixedArity = 3;
G__3675.cljs$lang$applyTo = G__3675__3680.cljs$lang$applyTo;
return G__3675;
})()
};
var G__3674 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3674__delegate.call(this, f, g, h, fs);
};
G__3674.cljs$lang$maxFixedArity = 3;
G__3674.cljs$lang$applyTo = (function (arglist__3684){
var f = cljs.core.first(arglist__3684);
var g = cljs.core.first(cljs.core.next(arglist__3684));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3684)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3684)));
return G__3674__delegate.call(this, f, g, h, fs);
});
return G__3674;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3642.call(this,f);
case  2 :
return juxt__3643.call(this,f,g);
case  3 :
return juxt__3644.call(this,f,g,h);
default:
return juxt__3645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3645.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3686 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3689 = cljs.core.next.call(null,coll);
coll = G__3689;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3687 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3685 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3685))
{return (n > 0);
} else
{return and__3546__auto____3685;
}
})()))
{{
var G__3690 = (n - 1);
var G__3691 = cljs.core.next.call(null,coll);
n = G__3690;
coll = G__3691;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3686.call(this,n);
case  2 :
return dorun__3687.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3692 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3693 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3692.call(this,n);
case  2 :
return doall__3693.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3695 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3695),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3695),1)))
{return cljs.core.first.call(null,matches__3695);
} else
{return cljs.core.vec.call(null,matches__3695);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3696 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3696)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3696),1)))
{return cljs.core.first.call(null,matches__3696);
} else
{return cljs.core.vec.call(null,matches__3696);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3697 = cljs.core.re_find.call(null,re,s);
var match_idx__3698 = s.search(re);
var match_str__3699 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3697))?cljs.core.first.call(null,match_data__3697):match_data__3697);
var post_match__3700 = cljs.core.subs.call(null,s,(match_idx__3698 + cljs.core.count.call(null,match_str__3699)));

if(cljs.core.truth_(match_data__3697))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3697,re_seq.call(null,re,post_match__3700));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3701_SHARP_){
return print_one.call(null,p1__3701_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3702 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3702))
{var and__3546__auto____3706 = (function (){var x__319__auto____3703 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3704 = x__319__auto____3703;

if(cljs.core.truth_(and__3546__auto____3704))
{var and__3546__auto____3705 = x__319__auto____3703.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3705))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3703));
} else
{return and__3546__auto____3705;
}
} else
{return and__3546__auto____3704;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____3703);
}
})();

if(cljs.core.truth_(and__3546__auto____3706))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3706;
}
} else
{return and__3546__auto____3702;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__319__auto____3707 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3708 = x__319__auto____3707;

if(cljs.core.truth_(and__3546__auto____3708))
{var and__3546__auto____3709 = x__319__auto____3707.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3709))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3707));
} else
{return and__3546__auto____3709;
}
} else
{return and__3546__auto____3708;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__319__auto____3707);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3710 = cljs.core.first.call(null,objs);
var sb__3711 = (new goog.string.StringBuffer());

var G__3712__3713 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3712__3713))
{var obj__3714 = cljs.core.first.call(null,G__3712__3713);
var G__3712__3715 = G__3712__3713;

while(true){
if(cljs.core.truth_((obj__3714 === first_obj__3710)))
{} else
{sb__3711.append(" ");
}
var G__3716__3717 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3714,opts));

if(cljs.core.truth_(G__3716__3717))
{var string__3718 = cljs.core.first.call(null,G__3716__3717);
var G__3716__3719 = G__3716__3717;

while(true){
sb__3711.append(string__3718);
var temp__3698__auto____3720 = cljs.core.next.call(null,G__3716__3719);

if(cljs.core.truth_(temp__3698__auto____3720))
{var G__3716__3721 = temp__3698__auto____3720;

{
var G__3724 = cljs.core.first.call(null,G__3716__3721);
var G__3725 = G__3716__3721;
string__3718 = G__3724;
G__3716__3719 = G__3725;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3722 = cljs.core.next.call(null,G__3712__3715);

if(cljs.core.truth_(temp__3698__auto____3722))
{var G__3712__3723 = temp__3698__auto____3722;

{
var G__3726 = cljs.core.first.call(null,G__3712__3723);
var G__3727 = G__3712__3723;
obj__3714 = G__3726;
G__3712__3715 = G__3727;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3711);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3728 = cljs.core.first.call(null,objs);

var G__3729__3730 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3729__3730))
{var obj__3731 = cljs.core.first.call(null,G__3729__3730);
var G__3729__3732 = G__3729__3730;

while(true){
if(cljs.core.truth_((obj__3731 === first_obj__3728)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3733__3734 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3731,opts));

if(cljs.core.truth_(G__3733__3734))
{var string__3735 = cljs.core.first.call(null,G__3733__3734);
var G__3733__3736 = G__3733__3734;

while(true){
cljs.core.string_print.call(null,string__3735);
var temp__3698__auto____3737 = cljs.core.next.call(null,G__3733__3736);

if(cljs.core.truth_(temp__3698__auto____3737))
{var G__3733__3738 = temp__3698__auto____3737;

{
var G__3741 = cljs.core.first.call(null,G__3733__3738);
var G__3742 = G__3733__3738;
string__3735 = G__3741;
G__3733__3736 = G__3742;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3739 = cljs.core.next.call(null,G__3729__3732);

if(cljs.core.truth_(temp__3698__auto____3739))
{var G__3729__3740 = temp__3698__auto____3739;

{
var G__3743 = cljs.core.first.call(null,G__3729__3740);
var G__3744 = G__3729__3740;
obj__3731 = G__3743;
G__3729__3732 = G__3744;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3745){
var objs = cljs.core.seq( arglist__3745 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3746){
var objs = cljs.core.seq( arglist__3746 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3747){
var objs = cljs.core.seq( arglist__3747 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3748){
var objs = cljs.core.seq( arglist__3748 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3749){
var objs = cljs.core.seq( arglist__3749 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3750 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3750,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3751 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3751))
{var nspc__3752 = temp__3698__auto____3751;

return cljs.core.str.call(null,nspc__3752,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3753 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3753))
{var nspc__3754 = temp__3698__auto____3753;

return cljs.core.str.call(null,nspc__3754,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3755 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3755,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3756 = this;
var G__3757__3758 = cljs.core.seq.call(null,this__3756.watches);

if(cljs.core.truth_(G__3757__3758))
{var G__3760__3762 = cljs.core.first.call(null,G__3757__3758);
var vec__3761__3763 = G__3760__3762;
var key__3764 = cljs.core.nth.call(null,vec__3761__3763,0,null);
var f__3765 = cljs.core.nth.call(null,vec__3761__3763,1,null);
var G__3757__3766 = G__3757__3758;

var G__3760__3767 = G__3760__3762;
var G__3757__3768 = G__3757__3766;

while(true){
var vec__3769__3770 = G__3760__3767;
var key__3771 = cljs.core.nth.call(null,vec__3769__3770,0,null);
var f__3772 = cljs.core.nth.call(null,vec__3769__3770,1,null);
var G__3757__3773 = G__3757__3768;

f__3772.call(null,key__3771,this$,oldval,newval);
var temp__3698__auto____3774 = cljs.core.next.call(null,G__3757__3773);

if(cljs.core.truth_(temp__3698__auto____3774))
{var G__3757__3775 = temp__3698__auto____3774;

{
var G__3782 = cljs.core.first.call(null,G__3757__3775);
var G__3783 = G__3757__3775;
G__3760__3767 = G__3782;
G__3757__3768 = G__3783;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3776 = this;
return this$.watches = cljs.core.assoc.call(null,this__3776.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3777 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3777.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3778 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3778.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3779 = this;
return this__3779.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3780 = this;
return this__3780.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3781 = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3790 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3791 = (function() { 
var G__3793__delegate = function (x,p__3784){
var map__3785__3786 = p__3784;
var map__3785__3787 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3785__3786))?cljs.core.apply.call(null,cljs.core.hash_map,map__3785__3786):map__3785__3786);
var validator__3788 = cljs.core.get.call(null,map__3785__3787,"﷐'validator");
var meta__3789 = cljs.core.get.call(null,map__3785__3787,"﷐'meta");

return (new cljs.core.Atom(x,meta__3789,validator__3788,null));
};
var G__3793 = function (x,var_args){
var p__3784 = null;
if (goog.isDef(var_args)) {
  p__3784 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3793__delegate.call(this, x, p__3784);
};
G__3793.cljs$lang$maxFixedArity = 1;
G__3793.cljs$lang$applyTo = (function (arglist__3794){
var x = cljs.core.first(arglist__3794);
var p__3784 = cljs.core.rest(arglist__3794);
return G__3793__delegate.call(this, x, p__3784);
});
return G__3793;
})()
;
atom = function(x,var_args){
var p__3784 = var_args;
switch(arguments.length){
case  1 :
return atom__3790.call(this,x);
default:
return atom__3791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3791.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3795 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3795))
{var validate__3796 = temp__3698__auto____3795;

if(cljs.core.truth_(validate__3796.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__3797 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3797,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3798 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3799 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3800 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3801 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3802 = (function() { 
var G__3804__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3804 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3804__delegate.call(this, a, f, x, y, z, more);
};
G__3804.cljs$lang$maxFixedArity = 5;
G__3804.cljs$lang$applyTo = (function (arglist__3805){
var a = cljs.core.first(arglist__3805);
var f = cljs.core.first(cljs.core.next(arglist__3805));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3805)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3805))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3805)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3805)))));
return G__3804__delegate.call(this, a, f, x, y, z, more);
});
return G__3804;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3798.call(this,a,f);
case  3 :
return swap_BANG___3799.call(this,a,f,x);
case  4 :
return swap_BANG___3800.call(this,a,f,x,y);
case  5 :
return swap_BANG___3801.call(this,a,f,x,y,z);
default:
return swap_BANG___3802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3802.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3806){
var iref = cljs.core.first(arglist__3806);
var f = cljs.core.first(cljs.core.next(arglist__3806));
var args = cljs.core.rest(cljs.core.next(arglist__3806));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3807 = (function (){
return gensym.call(null,"G__");
});
var gensym__3808 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3807.call(this);
case  1 :
return gensym__3808.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3810 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3810.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3811 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3811.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3811.state,this__3811.f);
}
return cljs.core.deref.call(null,this__3811.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3812){
var body = cljs.core.seq( arglist__3812 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3813__3814 = options;
var map__3813__3815 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3813__3814))?cljs.core.apply.call(null,cljs.core.hash_map,map__3813__3814):map__3813__3814);
var keywordize_keys__3816 = cljs.core.get.call(null,map__3813__3815,"﷐'keywordize-keys");
var keyfn__3817 = (cljs.core.truth_(keywordize_keys__3816)?cljs.core.keyword:cljs.core.str);
var f__3823 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__383__auto____3822 = (function iter__3818(s__3819){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3819__3820 = s__3819;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3819__3820)))
{var k__3821 = cljs.core.first.call(null,s__3819__3820);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3817.call(null,k__3821),thisfn.call(null,(x[k__3821]))]),iter__3818.call(null,cljs.core.rest.call(null,s__3819__3820)));
} else
{return null;
}
break;
}
})));
});

return iter__383__auto____3822.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3823.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3824){
var x = cljs.core.first(arglist__3824);
var options = cljs.core.rest(arglist__3824);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3825 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3829__delegate = function (args){
var temp__3695__auto____3826 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3825),args);

if(cljs.core.truth_(temp__3695__auto____3826))
{var v__3827 = temp__3695__auto____3826;

return v__3827;
} else
{var ret__3828 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3825,cljs.core.assoc,args,ret__3828);
return ret__3828;
}
};
var G__3829 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3829__delegate.call(this, args);
};
G__3829.cljs$lang$maxFixedArity = 0;
G__3829.cljs$lang$applyTo = (function (arglist__3830){
var args = cljs.core.seq( arglist__3830 );;
return G__3829__delegate.call(this, args);
});
return G__3829;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3832 = (function (f){
while(true){
var ret__3831 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3831)))
{{
var G__3835 = ret__3831;
f = G__3835;
continue;
}
} else
{return ret__3831;
}
break;
}
});
var trampoline__3833 = (function() { 
var G__3836__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3836 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3836__delegate.call(this, f, args);
};
G__3836.cljs$lang$maxFixedArity = 1;
G__3836.cljs$lang$applyTo = (function (arglist__3837){
var f = cljs.core.first(arglist__3837);
var args = cljs.core.rest(arglist__3837);
return G__3836__delegate.call(this, f, args);
});
return G__3836;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3832.call(this,f);
default:
return trampoline__3833.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3833.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3838 = (function (){
return rand.call(null,1);
});
var rand__3839 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3838.call(this);
case  1 :
return rand__3839.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3841 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3841,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3841,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3850 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3851 = (function (h,child,parent){
var or__3548__auto____3842 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3842))
{return or__3548__auto____3842;
} else
{var or__3548__auto____3843 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3843))
{return or__3548__auto____3843;
} else
{var and__3546__auto____3844 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3844))
{var and__3546__auto____3845 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3845))
{var and__3546__auto____3846 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3846))
{var ret__3847 = true;
var i__3848 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3849 = cljs.core.not.call(null,ret__3847);

if(cljs.core.truth_(or__3548__auto____3849))
{return or__3548__auto____3849;
} else
{return cljs.core._EQ_.call(null,i__3848,cljs.core.count.call(null,parent));
}
})()))
{return ret__3847;
} else
{{
var G__3853 = isa_QMARK_.call(null,h,child.call(null,i__3848),parent.call(null,i__3848));
var G__3854 = (i__3848 + 1);
ret__3847 = G__3853;
i__3848 = G__3854;
continue;
}
}
break;
}
} else
{return and__3546__auto____3846;
}
} else
{return and__3546__auto____3845;
}
} else
{return and__3546__auto____3844;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3850.call(this,h,child);
case  3 :
return isa_QMARK___3851.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3855 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3856 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3855.call(this,h);
case  2 :
return parents__3856.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3858 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3859 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3858.call(this,h);
case  2 :
return ancestors__3859.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3861 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3862 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3861.call(this,h);
case  2 :
return descendants__3862.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3872 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3873 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__3867 = "﷐'parents".call(null,h);
var td__3868 = "﷐'descendants".call(null,h);
var ta__3869 = "﷐'ancestors".call(null,h);
var tf__3870 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3871 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3867.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3869.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3869.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3867,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3870.call(null,"﷐'ancestors".call(null,h),tag,td__3868,parent,ta__3869),"﷐'descendants":tf__3870.call(null,"﷐'descendants".call(null,h),parent,ta__3869,tag,td__3868)});
})());

if(cljs.core.truth_(or__3548__auto____3871))
{return or__3548__auto____3871;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3872.call(this,h,tag);
case  3 :
return derive__3873.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3879 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3880 = (function (h,tag,parent){
var parentMap__3875 = "﷐'parents".call(null,h);
var childsParents__3876 = (cljs.core.truth_(parentMap__3875.call(null,tag))?cljs.core.disj.call(null,parentMap__3875.call(null,tag),parent):cljs.core.set([]));
var newParents__3877 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3876))?cljs.core.assoc.call(null,parentMap__3875,tag,childsParents__3876):cljs.core.dissoc.call(null,parentMap__3875,tag));
var deriv_seq__3878 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3864_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3864_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3864_SHARP_),cljs.core.second.call(null,p1__3864_SHARP_)));
}),cljs.core.seq.call(null,newParents__3877)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3875.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3865_SHARP_,p2__3866_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3865_SHARP_,p2__3866_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3878));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3879.call(this,h,tag);
case  3 :
return underive__3880.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3882 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3884 = (cljs.core.truth_((function (){var and__3546__auto____3883 = xprefs__3882;

if(cljs.core.truth_(and__3546__auto____3883))
{return xprefs__3882.call(null,y);
} else
{return and__3546__auto____3883;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3884))
{return or__3548__auto____3884;
} else
{var or__3548__auto____3886 = (function (){var ps__3885 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3885) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3885),prefer_table)))
{} else
{}
{
var G__3889 = cljs.core.rest.call(null,ps__3885);
ps__3885 = G__3889;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3886))
{return or__3548__auto____3886;
} else
{var or__3548__auto____3888 = (function (){var ps__3887 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3887) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3887),y,prefer_table)))
{} else
{}
{
var G__3890 = cljs.core.rest.call(null,ps__3887);
ps__3887 = G__3890;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3888))
{return or__3548__auto____3888;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3891 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3891))
{return or__3548__auto____3891;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3900 = cljs.core.reduce.call(null,(function (be,p__3892){
var vec__3893__3894 = p__3892;
var k__3895 = cljs.core.nth.call(null,vec__3893__3894,0,null);
var ___3896 = cljs.core.nth.call(null,vec__3893__3894,1,null);
var e__3897 = vec__3893__3894;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3895)))
{var be2__3899 = (cljs.core.truth_((function (){var or__3548__auto____3898 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3898))
{return or__3548__auto____3898;
} else
{return cljs.core.dominates.call(null,k__3895,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3897:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3899),k__3895,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3895," and ",cljs.core.first.call(null,be2__3899),", and neither is preferred")));
}
return be2__3899;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3900))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3900));
return cljs.core.second.call(null,best_entry__3900);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3901 = mf;

if(cljs.core.truth_(and__3546__auto____3901))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3901;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3902 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3902))
{return or__3548__auto____3902;
} else
{var or__3548__auto____3903 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3903))
{return or__3548__auto____3903;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3904 = mf;

if(cljs.core.truth_(and__3546__auto____3904))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3904;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3905 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3905))
{return or__3548__auto____3905;
} else
{var or__3548__auto____3906 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3906))
{return or__3548__auto____3906;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3907 = mf;

if(cljs.core.truth_(and__3546__auto____3907))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3907;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3908 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3908))
{return or__3548__auto____3908;
} else
{var or__3548__auto____3909 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3909))
{return or__3548__auto____3909;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3910 = mf;

if(cljs.core.truth_(and__3546__auto____3910))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3910;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3911 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3911))
{return or__3548__auto____3911;
} else
{var or__3548__auto____3912 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3912))
{return or__3548__auto____3912;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3913 = mf;

if(cljs.core.truth_(and__3546__auto____3913))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3913;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3914 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3914))
{return or__3548__auto____3914;
} else
{var or__3548__auto____3915 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3915))
{return or__3548__auto____3915;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3916 = mf;

if(cljs.core.truth_(and__3546__auto____3916))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3916;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3917 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3917))
{return or__3548__auto____3917;
} else
{var or__3548__auto____3918 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3918))
{return or__3548__auto____3918;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3919 = mf;

if(cljs.core.truth_(and__3546__auto____3919))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3919;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3920 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3920))
{return or__3548__auto____3920;
} else
{var or__3548__auto____3921 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3921))
{return or__3548__auto____3921;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3922 = mf;

if(cljs.core.truth_(and__3546__auto____3922))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3922;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3923 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3923))
{return or__3548__auto____3923;
} else
{var or__3548__auto____3924 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3924))
{return or__3548__auto____3924;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3925 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3926 = cljs.core._get_method.call(null,mf,dispatch_val__3925);

if(cljs.core.truth_(target_fn__3926))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3925)));
}
return cljs.core.apply.call(null,target_fn__3926,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3927 = this;
cljs.core.swap_BANG_.call(null,this__3927.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3927.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3927.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3927.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3928 = this;
cljs.core.swap_BANG_.call(null,this__3928.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3928.method_cache,this__3928.method_table,this__3928.cached_hierarchy,this__3928.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3929 = this;
cljs.core.swap_BANG_.call(null,this__3929.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3929.method_cache,this__3929.method_table,this__3929.cached_hierarchy,this__3929.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3930 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3930.cached_hierarchy),cljs.core.deref.call(null,this__3930.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3930.method_cache,this__3930.method_table,this__3930.cached_hierarchy,this__3930.hierarchy);
}
var temp__3695__auto____3931 = cljs.core.deref.call(null,this__3930.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3931))
{var target_fn__3932 = temp__3695__auto____3931;

return target_fn__3932;
} else
{var temp__3695__auto____3933 = cljs.core.find_and_cache_best_method.call(null,this__3930.name,dispatch_val,this__3930.hierarchy,this__3930.method_table,this__3930.prefer_table,this__3930.method_cache,this__3930.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3933))
{var target_fn__3934 = temp__3695__auto____3933;

return target_fn__3934;
} else
{return cljs.core.deref.call(null,this__3930.method_table).call(null,this__3930.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3935 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3935.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3935.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3935.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3935.method_cache,this__3935.method_table,this__3935.cached_hierarchy,this__3935.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3936 = this;
return cljs.core.deref.call(null,this__3936.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3937 = this;
return cljs.core.deref.call(null,this__3937.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3938 = this;
return cljs.core.do_invoke.call(null,mf,this__3938.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3939__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3939 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3939__delegate.call(this, _, args);
};
G__3939.cljs$lang$maxFixedArity = 1;
G__3939.cljs$lang$applyTo = (function (arglist__3940){
var _ = cljs.core.first(arglist__3940);
var args = cljs.core.rest(arglist__3940);
return G__3939__delegate.call(this, _, args);
});
return G__3939;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
