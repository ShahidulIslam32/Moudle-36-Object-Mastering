let students = {name: 'shaidul islam khan', department: 'computer',
    id: 3537,
    address : 'narayanganj',
    subjects : {
        name: 'javascript'
    },
    take: function(){
        return console.log(this.name,'is a MERN Developer !!');
    }
}

students.take()