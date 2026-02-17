import { use } from "react"
import Company from "./Company";

export default function Companies({companies}){
    const Companys = use(companies);
    console.log(Companys);
    return(
        <div className="task">
            <h1>Task three</h1>
            <p>Fetch the list of companies from the API and display them in a list format. Each company should be displayed with its name and email.</p>

            {
                Companys.map(company => (
                   <Company key={company.id} company={company}></Company>
                ))
            }
        </div>
    )
}