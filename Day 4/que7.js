marks = [{sno :1, Name :'Sai', Score : 80},
{sno :2, Name :'Mahesh', Score : 68},
{sno :3, Name :'Suresh', Score : 69},
{sno :4, Name :'Ramesh', Score : 79}]

lessmarks= marks.filter(marks=>marks.Score>70)
console.log(lessmarks)