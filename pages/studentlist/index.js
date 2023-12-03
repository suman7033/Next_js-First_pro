import Link from "next/link"
const StudentList = () => {
  return (
    <div>
       <h1>Student List</h1>
       <ul>
        <li>
            <Link href="/studentlist/sumo">Sumo</Link>
        </li>
        <li><Link href="/studentlist/anil">Anil</Link></li>
        <li><Link href="/studentlist/sonu">Sonu</Link></li>
        <li><Link href="/studentlist/anjo">Anjo</Link></li>
        </ul>
    </div>
  )
}

export default StudentList
