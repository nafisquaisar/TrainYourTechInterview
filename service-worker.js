const CACHE_NAME = "tcs-interview-cache-v1";

const FILES_TO_CACHE = [
  "index.html",
  "manifest.json",

  "Page/Intro.html",
  "Page/Projects.html",
  "Page/DSA.html",
  "Page/DBMS.html",
  "Page/SQL.html",
  "Page/Java.html",
  "Page/OOPS.html",
  "Page/Coding.html",
  "Page/Git.html",
  "Page/Family.html",

  "Page/Android.html",
  "Page/OS.html",
  "Page/CN.html",
  "Page/Kotlin.html",

  "Page/Firebase.html",
  "Page/SE.html",
  "Page/CF.html",
  "Page/SystemDesign.html",

  "Page/ML.html",
  "Page/Cloud.html",
  
  "Page/TuneLyf.html",
  "Page/Organizer.html",

  "Page/DSABasic.html",
  "Page/Graph.html",
  "Page/Queue.html",
  "Page/Tree.html",
  "Page/ImportantAlgo.html",
  "Page/Stack.html",
  "Page/DSAQuestions.html",
  "Page/Normalization.html",
  "Page/AdvancedDBMS.html",
  "Page/MostAskQuestionDBMS.html",
  "Page/DBMSBasic.Html",
  "Page/SQLNote.html",
  "Page/SQLQuestions.html",
  "Page/HrQuestions.html",
  "Page/EmergingTechnology.html",

  "Page/JavaBasic.html",
  "Page/JavaSenerioBased.html",
  "Page/thread.html",
  "Page/JavaIOFileHandle.html",
  "Page/JavaTermDiff.html",
  "Page/kotlin/BasicKotlin.html",
  "Page/kotlin/InterviewTrap.html",
  "Page/kotlin/KotlinAdvanced.html",
  "Page/kotlin/KotlinCollection.html",
  "Page/kotlin/KotlinForAnd.html",
  "Page/kotlin/KotlinSPClass.html",
  "Page/kotlin/KotlinVsJava.html",



];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
