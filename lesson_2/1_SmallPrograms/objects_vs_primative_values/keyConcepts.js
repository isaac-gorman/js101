/*
 Key Concepts to Understand About Objects vs Primitive Values

    Q: What are the only two values things can be in JS?
        1. Primitive Values = [strings, numbers, booleans, null, undefined]
        2. Objects = ["Simple Objects", Arrays, Functions, Dates"]

    Q: What does it mean for primitives to be atomic values?
        Primitive values are said to be "atomic values" because
        they are the most first principle you can break data down
        to in JavaScript. Primitive values are indivisible, they
        are the core building block of JavaScript.

        If a variable contains a primitive value, all you can do
        to that variable is use it in an expression or reassign
        it and assign it an entirely new value. All operations
        on primitive values will evaluate to new values. For
        example 0 + 0 will evaluate to a new value of 0.

    Q: What are compound values?
        Compound values are any values that is made up of multiple
        primitive values such as Arrays, Functions, Simple Objects
        and Dates.

    Q: What does it mean for primitive values to be immutable?
        Primitive values are like atoms technically you can
        split them but it is much easier to combine them and
        assign a new value. So in JS understand that you will
        never mutate a part of a primitive value because it is
        just one part. The primitive is already its most basic
        form.


    Q: What does it mean for objects to mutable?
        Unlike primitive values which an not made up of
        multiple sub parts. Object values can alter the
        smaller sub values by switching out, adding,
        and deleting primitive values.

        Remember that object values are made of smaller
        sub-values such as primitives and other object
        values.

        When mutating an objects values for example we aren't
        alerting the values or changing it we are simply re-assigning
        a new value within a particular place in memory.

    Q: What is an essential difference between primitives and objects in JS?
        Other than how primitives are immutable, and how objects are mutable
        a really key difference is in how each data type is passed to another.

        A key concept to imagine is that when ever I declare a variable and
        assign it to either a primitive or object value. The variable serves
        as a storage garage and as an address in which a particular data type
        is stored in. But the data that is stored in the storage unit the
        variable differs based on whether it is a primitive, or an object value.

        The when the primitive data type is stored in a variable the actual
        value of that primitive data type is stored at that variable.

        When an object is stored in a variable the actual object isn't stored
        there what is stored there is actually another address which will
        contain the object data type. This nested address within the variable
        is known as a reference, and object data types are thus known as
        reference data types.

        Because of these differences we actually copy each data type differently
        thus affecting the way altering the copied variable effects the other
        variables.

    Q: What does pass-by-reference mean?
        Because object data types are not stored by value and by address
        when ever we copy that variable by assigning it to another variable
        we are actually pointing to the original object. Thus any changes made
        to the copied object type will appear to the original variable and any
        other object type that was declared by assign it to the original object.
        This is can have unexpected outcomes if you aren't aware of this before
        hand.

    Q: What does pass-by-value mean?
        Primitive values are what they say they are. If I copy a variable
        assigned to a primitive value I copy a copy of the value not the
        address or a pointer that references the actual value of the
        original variable. Thus decoupling the relationship between
        the original variable and the copied variable if passed-by-value.
        But this doesn't mean that it isn't possible to pass a object
        data type by value. Primitive values are just passed by value
        by JavaScript and most languages by default. If I want to pass
        a object data type by value I need to spread it using the spread
        operator. The spread operator tells JS to pass the value and not
        the address of the variable.

*/

const originalArr = [1, 2, "b"];

const arrPassedByReference = originalArr;

const arrPassedByValue = [...originalArr];
arrPassedByValue[2] = 3;

arrPassedByReference.push("Global Mutation!");

console.log("originalArr: ", originalArr);
console.log("arrPassedByValue: ", arrPassedByValue);
console.log("arrPassedByReference: ", arrPassedByReference);
