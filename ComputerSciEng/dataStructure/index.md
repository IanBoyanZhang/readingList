Java?
1. [Differences between hashmap and hashtable](http://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable)
Hashtable is synchronized, whereas HashMap

This makes HashMap better for non-threaded applications, as unsynchronized Objectes typically perform better than synchronized ones

2. Hashtable does not allow null keys or values. Hashmap allows one null key and any number of null values

3. HashMap --> Subclasses is LinkedHashMap, so in the event that you`d want predicatable iteration order (which is insertion order by default),
you could easily swap out the HashMap for a LinkedHashMap. This wouldn`t be as easy if you were using Hashtable

If synchronization becomes an issue, you may also look at ConcurrentHashMap

[ConcurrentHashmap and hashtable in Java](http://stackoverflow.com/questions/12646404/concurrenthashmap-and-hashtable-in-java)
