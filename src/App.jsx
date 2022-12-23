//CON LAS EXPRESIONES REGULARES COLOCARLAS ENTRE / / AUNQUE APAREZCAN EN ROJO
import { useState } from "react";
import { appendErrors, useForm } from "react-hook-form";

export const App = () => {

	const { register, handleSubmit, formState: { errors }, watch, getValues } = useForm();

	const onSubmit = (data) => {
		//console.log(data)
		//console.log(data.edad)
	}

	const { nombre, correo, edad } = getValues(); //Para tener los estados
	console.log(nombre, correo, edad)

	return (

		<>
			<p>Nombre: { watch('nombre') } </p>

			<form onSubmit={handleSubmit(onSubmit)} >
				<div>
					<label htmlFor="name">Nombre:</label>
					<input type="text" id="name" {...register('nombre')} />
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" {...register('correo')} />
				</div>
				<div>
					<label htmlFor="age">Edad:</label>
					<input type="text" id="age" {...register('edad', {
						required: true,
						minLength: 1,
						maxLength: 3,
						pattern: {
							value: /^[0-9]+$/,
							message: 'Error'
						}
					})} />
					{errors.edad?.type === 'required' && <p>El campo edad es requerido</p>}
					{errors.edad?.type === 'maxLength' && <p>El campo edad debe tener maximo 3 caracteres</p>}
					{errors.edad?.type === 'pattern' && <p>El campo edad solo debe tener numeros (expresion regular)</p>}
				</div>
				<div>
					<label>Pais:</label>
					<select {...register('pais')} >
						<option value="españa">España</option>
						<option value="italia">Italia</option>
						<option value="alemania">Alemania</option>
					</select>
				</div>
				<input type="submit" />
			</form>
		</>

	)
}
