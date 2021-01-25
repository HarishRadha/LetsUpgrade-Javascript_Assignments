console.log("_______Question 1 Solution_________")
console.log("Program to display the reading status")

    var library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
        }];

    liblength=library.length
    for (i=0;i<liblength;i++)
    {
        if(library[i].readingStatus)
        {
            console.log("Already Read '",library[i].author, "' by the",library[i].title)
        }
        else
        {
            console.log("You still need to read '",library[i].title, "' by",library[i].author)
        }
    }

    
console.log("_______Question 2 Solution_________")
console.log("Program that generates an alert based on drivers age")

            age=prompt("Enter your age")
    
                if (age<18)
                {
                    alert("Not legal age to drive")
                }
                else 
                {
                    alert("Drive safe")
                }
    