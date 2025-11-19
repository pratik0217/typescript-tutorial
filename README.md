# typescript-tutorial
Installation Typescript 
- install node in laptop if already install the node in laptop then install typescript
- what is difference between typescript install in project and globally install ?
- (install in project limited) Having TypeScript set up on a per-project basis lets you have many projects with many different versions of TypeScript, this keeps each project working consistently
- npm install typescript --save-dev

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
