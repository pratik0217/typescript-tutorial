<img width="624" height="706" alt="image" src="https://github.com/user-attachments/assets/d79be6f0-b2b8-4d33-8267-7706cb86c79d" /># TYPESCRIPT TUTORIAL
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
What is Any Datatype ?
- Which allows a variable to hold values of any type.
- If are not sure about data type of variable then can use any.
<br>
<br>
Where use Any Datatype ?
- When migrating JavaScript code to typescript.
- When dealing with dynamic values from APIs.
- When working with third-party libraries that lack type definations.
<br>
<br>
What is Unknown Datatype ?
- The unknown type in typescript is similar to any, but it's safer because it forces type checking before performing operations on the value.

# Return Type in function
- same javascript type
# Never in Typescript
- A function returning 'never' cannot have a reachable end point. ( infinite loop have in function then use 'naver')

# Union Type
What is a Union Type?
- Union type means "OR" between types.
- Written using the pipe symbol: |
- It tells TypeScript that a value can be any one of several types.
<img width="678" height="108" alt="Screenshot 2025-11-22 005809" src="https://github.com/user-attachments/assets/92a0504a-6360-413e-b836-d3f53238fe2a" />
<br>
Why Use Union Types ?
- Handling flexible data formats (API responses, form inputs)

<img width="672" height="217" alt="Screenshot 2025-11-22 010019" src="https://github.com/user-attachments/assets/8f1272e2-c89d-41ed-8aac-c3df3bf739fb" />
<img width="675" height="453" alt="Screenshot 2025-11-22 010033" src="https://github.com/user-attachments/assets/8efc31f0-71bd-4c2f-ad56-503b0d68aa61" />
<img width="686" height="387" alt="Screenshot 2025-11-22 010111" src="https://github.com/user-attachments/assets/94dc50e5-a720-404f-a2c8-0f990ea11791" />
<img width="677" height="372" alt="Screenshot 2025-11-22 010132" src="https://github.com/user-attachments/assets/42bdae76-d636-4e8b-a7a4-910f12cc4f62" />
<img width="693" height="394" alt="Screenshot 2025-11-22 010207" src="https://github.com/user-attachments/assets/2ddcb59c-f6f4-40e1-85fc-d482e6652461" />
<br>
<br>
Best Practices
- Prefer union types over any
- Use narrowing (typeof, in, instanceof)
- Use type aliases for readability
- Use string literal unions for fixed values

# Interface
What is an Interface in TypeScript?
- An interface is a way defines the structure of an object, function and Class.
- It specifies what properties and methods an object or class should have.
- It only exists at compile time — it does not generate JavaScript code.
- Similar to a contract in OOP.
- extends use only interface time.

# Intersection types in Typescript
- An intersection type combines two or more types into one type.
- The resulting type must satisfy all the combined types.
- Written using the & symbol.
<img width="928" height="301" alt="Screenshot 2025-11-22 021810" src="https://github.com/user-attachments/assets/b15a361a-72f4-4f15-bef0-67728a17d3b2" />

# Type in Typescript
What is type in TypeScript?
- type in TypeScript is used to create custom type aliases.
- Union only use in Type not interface
- It allows you to give a name to any type — primitive, object, function, union, intersection, etc.
  <br>
  <br>
Why use type?
- For reusability
- For clean, readable code
- To define complex types
- To create unions & intersections
- To define function types.

# Enum Data type
- A data type that allows you to define a set of named constants.
- Mostly define camelCase format varibleName.

# DOM Handling & typescript
What is a Class in TypeScript?
- A class in TypeScript is a blueprint to create objects with properties (variables) and methods (functions).
- Classes declare camelFormat
<br>
<br>
TypeScript classes also support:
✔ Type annotations
✔ Access modifiers (public, private, protected)
✔ Constructors
✔ Inheritance
✔ Readonly properties
✔ Getters & setters
<br>
<br>

# Access Modifiers
- Access modifiers are keywords used inside classes to control the visibility (accessibility) of properties and methods.
- They help create encapsulation, which means hiding internal details and exposing only what is needed.
- TypeScript has three main access modifiers :- Public, Private & Protected.

1️⃣ public (default)ś
- Accessible anywhere
- From inside the class, outside the class, and subclasses
- If you don’t write anything, TS uses public
<img width="666" height="233" alt="Screenshot 2025-11-24 205906" src="https://github.com/user-attachments/assets/5968ceb6-2bd9-46d9-8bd8-697e82d39aac" />
<br>
<img width="670" height="476" alt="Screenshot 2025-11-24 205922" src="https://github.com/user-attachments/assets/9e8679ce-00ab-4f3d-aca7-3c5f9f3fc871" />
<br>
<img width="677" height="544" alt="Screenshot 2025-11-24 205944" src="https://github.com/user-attachments/assets/1dd9ff6f-02eb-42d6-93c5-cd441c644c4d" />
<br>

# Inheritance in Typescript
- Inheritance works just like in other object-oriented languages (like Java or C++). It allows a class (child) to inherit properties and methods from another class (parent). This promotes code reuse and extensibility.
<br><br>
<img width="624" height="706" alt="Screenshot 2025-11-24 212647" src="https://github.com/user-attachments/assets/25f3cc65-befb-4773-931a-384390bf8b0b" />
<br>
<img width="602" height="230" alt="Screenshot 2025-11-24 212856" src="https://github.com/user-attachments/assets/2f2af641-38a1-4952-ae92-87d34eef7bb9" />
<br>
🔹 Why Use Inheritance?
- Avoid code duplication
- Organize related classes
- Enable polymorphism
- Simplify code maintenance

# Modules in Typescript
- Modules are a way to organize and reuse code by splitting it into separate files. Each file is treated as a module. You can export functions, classes, variables, or interfaces from one module and import them into another.
<br>
<img width="663" height="597" alt="Screenshot 2025-11-24 215304" src="https://github.com/user-attachments/assets/e80e32d5-8d6c-4884-be18-6d67fbe21a77" />
<br>
<img width="668" height="649" alt="Screenshot 2025-11-24 215337" src="https://github.com/user-attachments/assets/4a7072ff-07bc-4584-9177-bf097f35cce3" />
<br>
Why Use Modules?
- Organize code into smaller, manageable files
- Avoid global scope pollution
- Reuse code across projects
- Work seamlessly with ES6 module system and tools like Webpack, Vite, Node.js
<br>
<img width="680" height="427" alt="Screenshot 2025-11-24 215501" src="https://github.com/user-attachments/assets/d02dd782-cce5-4605-81a8-f298fc5a9965" />
Notes - Module same of react component export and import like
# Getter and Setter in Typescript
- Getter & Setter helps to the modification of class when use set & get in class. 
- Getter and setter methods in TypeScript (TS), often referred to as accessors, allow you to control access to the properties of a class. They provide a way to execute custom logic when a property is read (getter) or written to (setter).
<br>
🔑 Key Concepts
Accessors are defined using the get and set keywords within a class. They operate on a private backing field (a regular class property, typically marked private) which stores the actual data.
<br>
1. Getter (get) - return value  
A getter method is executed when you try to read the value of the property.
Purpose: To retrieve the value of a private property, often after performing some calculation, formatting, or validation.
<br>
Syntax:
- It must return a value.
- It takes no arguments.
<br>
<img width="786" height="458" alt="Screenshot 2025-11-24 220519" src="https://github.com/user-attachments/assets/83896a8f-4223-4ee2-afe2-1fff40b65ed6" />
<br><br>
2. Setter (set)
A setter method is executed when you try to assign a new value to the property.
Purpose: To enforce data validation or perform other side effects (like triggering an update) before the new value is stored in the private backing field.
Syntax:
- It must take exactly one argument.
- It does not return a value.
<br>
<img width="789" height="584" alt="Screenshot 2025-11-24 220627" src="https://github.com/user-attachments/assets/9fa377ad-0e06-4c49-b128-be3409dbff96" />

# Interface with Class
- Interfaces in TypeScript describe the shape of an object or class, acting as a contract. A class can use the implements keyword to declare that it adheres to this contract, ensuring it provides all the properties and methods defined by the interface.
<br>
<img width="1356" height="720" alt="Screenshot 2025-11-24 231925" src="https://github.com/user-attachments/assets/a59245b4-b47f-44d5-a4a6-522664a1ee40" />

# Static in Typescript
- use to define static property & Methods.
- Memory efficiency
- Utility method
- Global Constants.
<br>
<img width="1226" height="390" alt="Screenshot 2025-11-24 234455" src="https://github.com/user-attachments/assets/3f6e1f01-6969-429b-a9c6-362e36faa7d3" />

# Typeguard in Typescript (check the actual datatype in Interface, class and variable, methods)
- A type Guard in Typescript is a technoque used to narrow down the type of a variable within a conditional block (check the actual type using conditional block)
<br><br>
typeof - This guard checks the basic JavaScript primitive types: string, number, boolean, symbol, bigint, undefined, and object (including arrays and null).
<br>
instanceof - This guard checks if a value is an instance of a specific class (or constructor function). It is useful for narrowing down class types within a union.
<br>
Custom type - interface

# Generic In TS
