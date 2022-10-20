const Table = (props) => {
    //     //Buyers
    //     Service
    // Due Date
    // Total Price
    //     Note
    //     Status
    const columns = [
        {
            id: "buyers",
            label: "Buyers"
        },
        {
            id: "service",
            label: "Service"
        },
        {
            id: "dueDate",
            label: "Due Date"
        },
        {
            id: "totalPrice",
            label: "Total Price"
        },
        {
            id: "note",
            label: "Note"
        },
        {
            id: "projectStatus",
            label: "Status"
        },
    ]

    const rows = [
        {
            buyers: "Shahid",
            service: "Web Development",
            dueDate: new Date().getFullYear(),
            totalPrice: "$" + 120000,
            note: "Awesome project",
            projectStatus: "✅"

        },
        {
            buyers: "Ahmad",
            service: "VA",
            dueDate: new Date().getFullYear(),
            totalPrice: "$" + 10000,
            note: "Awesome project VA",
            projectStatus: "✅"

        },
        {
            buyers: "Shahid",
            service: "Logo Design",
            dueDate: new Date().getFullYear(),
            totalPrice: "$" + 1200,
            note: "Awesome Design",
            projectStatus: "✅"

        },
    ]
    return (
        <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <input type="checkbox" />&nbsp;&nbsp;
                                        All
                                    </th>
                                    {columns.map(column => {
                                        return <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{column.label}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">

                                {rows.map(row => {

                                    return <tr>
                                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <input type="checkbox" />&nbsp;&nbsp;
                                        </td>
                                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {row.buyers}
                                        </td>
                                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{row.service}</td>
                                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{row.dueDate}</td>
                                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{row.totalPrice}</td>
                                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{row.note}</td>
                                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{row.projectStatus}</td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Table; 