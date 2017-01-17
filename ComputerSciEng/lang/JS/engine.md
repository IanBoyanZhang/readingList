## References
[JavaScript Engines: Under the Hood](https://www.youtube.com/watch?v=bx_VmJGdgHc)

[Eightpack sample apps working with google v8](https://github.com/ariya/eightpack)

### Tokenizer on V8

src/scanner.*

hand-written state machine

### Parser on V8

src/parser.*

hand-written recursive descent

Code Trace

Script:: Compile
Script:: New
internal:: Compiler:: Compile
internal:: MakeFunctionInfo
internal:: ParserApi::Parse

### Interpreter

Faster Javascript

Bytecode

Serialize tree traversal into a list of "actions"

Compile the bytecodes into machine instructions
JIT Compile

### Runtime

Bridging

V8 Embedder`s guide

Handle

Local vs Persistent (long lived)

C++ sides of Objects

Expose variable, function

### Demo
Code Formatter

