

export function Texto({label, id, onChange}) {

return(
    <>
    <label htmlFor={id}>{label}</label>
   <input 
   type="text"
   id= {id}
   onChange={onChange}
   />
   </>
)

}