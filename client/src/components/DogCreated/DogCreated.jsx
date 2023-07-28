import React, {useState, useEffect} from "react";
import {Link , useNavigate} from 'react-router-dom';
import { postDog, getTemperaments } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

// function validate(input){
//     let errors = {};
//     if(!input.name){
//         errors.name="se requiere una raza";
//     }else if(!input)
// }


export default function DogCreated(){
    const dispatch = useDispatch();
    const history = useNavigate();
    const temperaments = useSelector((state)=> state.temperaments)
    const [ input, setInput] = useState({
        name : "",
        height:"",
        weight:"",
        life_time:"",
        image : "",
        temperaments:[]
    })

    function handleChange(evento){
        setInput({
            ...input,
            [evento.target.name] : evento.target.value
        })
        console.log(input)
    }

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

    function handleSubmit(evento){
        evento.preventDefault();
        console.log(input)
        dispatch(postDog(input))
        alert("Dog created!")
        setInput({
            name : "",
            height:"",
            weight:"",
            life_time:"",
            image : "",
            temperaments:[]
        })
        history.pushState('/home')
    }
    
    useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch]);

    return(
        <div>
            <Link to='/home'>
                <button>Return</button>
            </Link>
            <h1>Create your dog!</h1>
            <form onSubmit={(evento)=>handleSubmit(evento)}>
                <div>
                    <label>Nombre:</label>
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Height:</label>
                    <input
                    type="text"
                    value={input.height}
                    name="height"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Weight:</label>
                    <input
                    type="text"
                    value={input.weight}
                    name="weight_min"
                    onChange={handleChange}
                    />
                </div>                
                <div>
                    <label>Time Life:</label>
                    <input
                    type="text"
                    value={input.life_time}
                    name="life_time"
                    onChange={handleCheck}
                    />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                    type="text"
                    value={input.image}
                    name="image"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Temperamento:</label>
                    <input
                    type="text"
                    value={input.temperaments}
                    name="temperaments"
                    onChange={handleCheck}
                    />
                </div>
                <select onChange={(evento)=>handleSelect(evento)}>
                    {temperaments.map((temp)=>(
                        <option value={temp.name}>
                            {temp.name}
                        </option>
                    ))}
                </select>
                <ul><li>{input.temperament.map(elemento=>elemento + ",")}</li></ul>
                <button type="submit">Crear Perro</button>
            </form>
        </div>
    )
}
