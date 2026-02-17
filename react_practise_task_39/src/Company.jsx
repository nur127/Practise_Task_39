export default function Company({company}) {
    return (
        <div className="task">
            <h2>Company Name : {company.name}</h2>
            <p>Username : {company.username}</p>
            <p>Email : {company.email}</p>
            <p>Phone : {company.phone}</p>
            <p>City : {company.address.city}</p>
            <p>Street : {company.address.street}</p>
        </div>
    );
}