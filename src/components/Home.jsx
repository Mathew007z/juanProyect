import { getApi } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {

const state = useSelector((state) => state)
const { data } = state.fetch
const ApiList = 'https://dog.ceo/api/breeds/list'
const dispatch = useDispatch()


    useEffect(() => {
        fetch(ApiList)
        .then((res) => res.json())
        .then((response) => dispatch(getApi(response.message)))
    },[dispatch])
    console.log(data)




    return(
        <main>
 
        </main>
    )
}

export default Home;