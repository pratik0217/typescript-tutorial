# TYPESCRIPT TUTORIAL
Lecture Video - https://youtu.be/oTam-6tHew4?si=L74yDfjuaSbNPxMy
<br>

Installation Typescript 
- install node in laptop if already install the node in laptop then install typescript
- what is difference between typescript install in project and globally install ?
- (install in project limited) Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently
- npm install typescript --save-dev
<br><br>
- (install in computer then typescript any folder work)It can be handy to have TypeScript available across all projects, often to test one-off ideas. Long-term, codebases should prefer a project-wide installation over a global install so that they can benefit from reproducible builds across different machines.
- npm install -g typescript

# What is difference between Typescript & JavaScript
- If want to be typescript file converted in JS then use ( npx tsc fileName ) tsc means typescript compiler.
- Create project then use typescript for help the developer as understanding type of data and also browser doesn't understanding typescript there is know JS for client side.
- npx tsc fileName --watch this help for checking the changes in typescript file then also converted in App.js

# Data types in Typescript
What is Datatypes in TS ?
- which data store in variable that is called Datatype in TS
- example : var language:string = "Typescript", var phoneNumber:number = 70383029, var male:boolea = true ;

Datatypes categories ? 
- Primitive types : Inbuilt data type in TS - number, string, boolean, null, undefined, bigint, symbol.
- Object types : Array, Tuple(fixed-length array with different types) & Object (keys-pair value collection).
- Special types : Any(Accepts any value (not recommended).),unknown(Safer than any), void(Function returns nothing.) & never(Function never returns.).
- Advanced Types : Union(A variable can hold multiple types), Intersection(Combines multiple types), Type alias(Defines custom types), Enum & Literal types(Restricts a value to a specific set).
- Function types (something people to accourding this types or Not list) : Defines the type of a function.

Note - Float have in TS but not declaring num:float this throw the error right way declear float(decimal number) as a percentage:number = 67.90;

# Number Data type in TS
- Apply number data type
- Redeclare issue
- Add number with data type
- use binary & hexadecimal numbers
- convert string to number
- type inference with number (Automatically detect the data type of variable value through when hover in variable).
- Decimal with number data type

# String & Boolean in TS
- Apply string data type
- ways to define string
- Convert in string data type
- apply boolean data type
- Possible boolean values (only true or false passible not a yes or no, 0 or 1).
- inference and declaration issues 

# Null(No value) & Undefined(Variable declared but not assigned) Datatype in TS
What is Null datatype ?
- The null datatype represents a variable that has no value or is empty. It is a primitive type, just like string or number.
- The only value a null type variable can hold is null.
- Null typeof is Object.
Example : let value: null = null;
<br><br><br>

What is Undefined Datatype ?
- The undefined datatype represents a variable that has been declared but has not been assigned a value. It is one of the primitive types.
- The only value an undefined type variable can hold is undefined.
- undefined typeof is undefiend.
Example : let value: undefined = undefined;

# Typescript Configu file
How to generate config file ?
- npx tsc --init
<br> 
Convert all TS file to JS Together ?
- tsc

# BigInt Data type
What is BigInt datatype ?
- bigint is a primitive datatype used to represent integers larger than the safe limit of the number type.
<br>
<br>
<br>

# Symbol Datatype
What is Symbol datatype ?
- Each symbol is unique, even if two symbols have the same description.
- Useful when you want to create a property key that won’t collide with other keys.

# Array & Tuple Datatype
- Collection of a same datatype
- Predefined datatype
<br>
<br>
Tuple Array datatype
- A tuple is fixed-length.
- Ordered collection of different types.
- Each element in a tuple has a specific type.
- Tuple is only work it in Typescript language not javascript.
<img width="663" height="213" alt="Screenshot 2025-11-21 231953" src="https://github.com/user-attachments/assets/6d351d27-989b-4031-8838-258c6df9f927" />
<br>

# Object & Nested Object Datatype
- key-pair type store the value.
<img width="877" height="716" alt="Screenshot 2025-11-22 001027" src="https://github.com/user-attachments/assets/d385b1f9-b092-43de-af27-19eea54e703c" />
<br>
- If did not knows how many key have in object then use this method.
<img width="812" height="360" alt="Screenshot 2025-11-22 001047" src="https://github.com/user-attachments/assets/9b89e9f4-7d91-4857-b097-a6fc9f3d7b68" />

# Any and Unknown
