import TableComponent from "../GlobalComponents/table"

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

const OrderList = () => {
    return (
        <>
            <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='h-[84vh] overflow-y-auto p-5 bg-white rounded-2xl'>
                <TableComponent
                    viewDelete
                    onDelete={(row) => {
                        alert("row deleted");
                    }}

                    viewEdit
                    onEdit={(row) => {
                        alert('edite')
                    }}
                    colums={[
                        { label: "Table type", id: "type" },
                        { label: "Quantity ", id: "quantity" },
                        { label: "Action", id: "actions" },
                    ]}
                    rowsperpage={10}
                    page={1}
                    rows={[
                        {
                            type: "2persons",
                            quantity: "2",
                            action: "",
                        },
                        {
                            type: "4persons",
                            quantity: "4",
                            action: "",
                        },
                        {
                            type: "6persons",
                            quantity: "9",
                            action: "",
                        },

                        {
                            type: "5persons",
                            quantity: "4",
                            action: "",
                        },
                        {
                            type: "2persons",
                            quantity: "2",
                            action: "",
                        },
                    ]}

                />
            </div>
        </>
    )
}
export default OrderList