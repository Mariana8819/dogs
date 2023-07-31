import React, {useState, useEffect} from "react";
import {Link , useNavigate} from 'react-router-dom';
import { postDog, getTemperaments, getAllDogs} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import'./DogCreated.module.css';
import Validate from'./Validate';


export default function DogCreated(){
    const dispatch = useDispatch();
    const history = useNavigate();
    const allDogs = useSelector((state)=>state.dogs);
    const alltemperaments = useSelector((state)=> state.temperaments);
    
    const [errors, setErrors] = useState({});

    const [ input, setInput] = useState({
        image : "",
        name : "",
        height:"",
        weight:"",
        life_time:"",        
        temperament:[]
    })

    function handleChange(evento){
        setInput({
            ...input,
            [evento.target.name] : evento.target.value
        })
        setErrors(
            Validate({
              ...input,
              [evento.target.name]: evento.target.value,
            })
          );
      
          console.log(input)
        };
            

    function handleCheck(evento){
        if(evento.target.checked){
            setInput({
                ...input,
                status:evento.target.value
            })
        }
    }

    function handleSelect(evento){
        setInput({
            ...input,
            temperament:[...input.temperament , evento.target.value]
        })
    }

    // const handleSelct = (e) => {
    //     if (input.temperament.length <= 4) {
    //       if (input.temperament === "") setInput({ ...input, temperament: [] });
    //       if (Object.values(input.temperament).includes(e.target.value)) {
    //         Swal.fire({
    //           title: `Temperamento Duplicado`,
    //           icon: 'warning',
    //           timer: 3000,
    //           confirmButtonColor: 'orange',
    //         })
    //       } else {
    //         setInput({
    //           ...input,
    //           temperament: [...input.temperament, e.target.value],
    //         });
    //       }
    //     }
    //     else {
    //       Swal.fire({
    //         title: `Maximo 5 Temperamentos`,
    //         icon: 'info',
    //         timer: 2000,
    //         confirmButtonColor: 'orange',
    //       })
    //     }
    //   };
    

    function handleSubmit(e){
        e.preventDefault();
        const existeName = allDogs.filter(
          (e) => e.name.toLowerCase() === input.name.toLowerCase()
        );
      
        if (existeName.length > 0) {
          alert(`Ya Existe El Perro ${input.name}`);
        } else {
          if (!Object.keys(input).length || input.temperament.length === 0) {
            alert('Complete Todos Los Campos. Todos Son Obligstorios, Menos La Imagen');
          } else if (Object.keys(errors).length) {
            alert('Datos Incorrectos');
          } else {
            dispatch(postDog(input));
            alert(`El Perro ${input.name} Fue Creado Con Exito. Sera Redirigido Al Inicio`);
            setInput({
              name: "",
              weightMin: "",
              weightMax: "",
              heightMin: "",
              heightMax: "",
              temperament: [],
              life_span: "",
              image: "",
            });
            setTimeout(() => {
              history.push('/home');
            }, 3000);
          }
        }
      }
    //     evento.preventDefault(evento);
    //     console.log(input)
    //     dispatch(postDog(input))
    //     alert("Dog created!")
    //     setInput({
    //         image : "",
    //         name : "",
    //         height:"",
    //         weight:"",
    //         life_time:"",            
    //         temperament:[]
    //     })
    //     history.pushState('/home')
    // }
    
    useEffect(()=>{
        dispatch(getTemperaments());
        dispatch(getAllDogs());
    },[dispatch]);

   
    return(
        <div className="container-dog">
            <form className="container-form" onSubmit={(evento)=> handleSubmit(evento)}>
            <div className="container-input">
                <div className="button-volver">
                    <Link className="link-dog" to='/home'>
                <button>Regresar</button>
                  </Link>
                  </div>

                  <div className="formulario">
                    <div className="titulo">
                  <h1>Crea tu perro!</h1>
                  </div>
            
                  <div className="display-input">
                    <label>Nombre:</label>
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={evento=>handleChange(evento)}
                    />
    
                </div>

                <div className="display-input">
                    <label>Altura:</label>
                    <input
                    type="text"
                    value={input.height}
                    name="height"
                    onChange={evento=>handleChange(evento)}
                    />
                </div>

                <div className="display-input">
                    <label>Peso:</label>
                    <input
                    type="text"
                    value={input.weight}
                    name="weight_min"
                    onChange={evento=>handleChange(evento)}
                    />
                </div>   
                             
                <div className="display-input">
                    <label>Tiempo de Vida:</label>
                    <input
                    type="text"
                    value={input.life_time}
                    name="life_time"
                    onChange={evento=>handleCheck(evento)}
                    />
                </div>

                <div className="display-input">
                    <label>Imagen:</label>
                    <input
                    type="url"
                    value={input.image}
                    name="image"
                    onChange={evento=>handleChange(evento)}        
                    />
                </div>

                <div className="display-input">
                    <label>Temperamento:</label>
                    <select onChange={evento=>handleSelect(evento)}>
                        {alltemperaments?.map((elemento)=>{
                            return(
                                <option value={elemento.name} key={elemento.id}>
                                {elemento.name}
                                </option>
                            )
                        })}
                        </select>
                        </div>
                                      
                        <div className="display-input btn-crear">    
                        <button type="submit">Crear Perro</button>
                        </div>
                    </div>
                 </div>
                        
            </form>
        </div>
    )
}



/////131 <<<     {<span className="error">{errors.name}</span>}
//////187<<< type="text"
// value={input.temperaments}
// name="temperaments"
// onChange={handleCheck}
// // />
// <select onChange={(evento)=>handleSelect(evento)}>
// {temperaments.map((temp)=>(
//     <option value={temp.name}>
//         {temp.name}
//     </option>
// ))}
// </select>
// <ul><li>{input.temperament.map(elemento=>elemento + ",")}</li></ul>