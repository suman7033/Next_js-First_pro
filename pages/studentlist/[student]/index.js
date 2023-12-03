"use client"
const Student = ({params}) => {
    console.log(params);
  return (
    <div>
       <h1>Student Details</h1>
          <h2>Name: {params}</h2>
    </div>
  )
}

export default Student;

 