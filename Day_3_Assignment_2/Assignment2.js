console.log("_______Question 1 Solution_________")
        // In the below code snippet, after the initialisation of array, the length is again assigned as 0.
        // So clothes array has no elements in it. So when you try to any positional elements of an empty array
        // The result is Undefined

        const clothes = ['jacket', 't-shirt'];
        clothes.length = 0;
        console.log(clothes[0]);


console.log("_______Question 2 Solution_________")
        console.log("Program to find the sum of all elements of a given array")

        var numarray=[10,20,30,40,50];
        arraylength=numarray.length;
        sum=0;
        for (i=0;i<arraylength;i++)
        {
            sum=sum+numarray[i]
        }
        console.log("Sum of elements in array=",sum)

    