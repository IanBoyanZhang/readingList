## Object

### Enumerability
[What does enumerable mean](http://stackoverflow.com/questions/17893718/what-does-enumerable-mean)

```javascript
var descriptor = Object.getOwnPropertyDescriptor({ bar: 1 }, 'bar');

console.log(descriptor.enumerable);
console.log(descriptor.value);

console.log(descriptor);
```

```
```
