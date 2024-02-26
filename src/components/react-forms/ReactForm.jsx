import { useForm, SubmitHandler } from "react-hook-form"


// type Inputs = {
//   example: string
//   exampleRequired: string
// }


export default function ReactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit= (data) => console.log(data)


//   console.log(watch("example")) // watch input value by passing the name of it
console.log("component rendered", errors.exampleRequired?.message);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example",
      {
        pattern: /[A-Za-z]{3}/
      })} />


      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required:"required field"})} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>{errors.exampleRequired?.message}</span>}


      <button type="submit" >Submit</button>
    </form>
  )
}
