import axios from 'axios';
import { SyntheticEvent, useRef, useState } from 'react';
import AmiiboTable from './amiibo-table';
import {Amiibo} from './dtos/amiibo';

export default function NintendoAmiiboLookUp() {

    const nintendoAmiiboInput = useRef<any>();

    const [nintendoAmiibo, setNintendoAmiibo] = useState<Amiibo>();

    async function getNintendoAmiiboName(event:SyntheticEvent) {
        const name:string = nintendoAmiiboInput.current.value as string;
        const response = await axios.get(`https://www.amiiboapi.com/api/amiibo/?name=${name}`)
        const nintendoAmiibo:Amiibo = response.data.amiibo[0];
        console.log(nintendoAmiibo)
        setNintendoAmiibo(nintendoAmiibo)
    }

    return (
        <div>

            <h2>Nintendo Amiibo Character</h2>
            <input placeholder="Enter Name" ref={nintendoAmiiboInput}></input>
            <button onClick={getNintendoAmiiboName}>Get Nintendo Amiibo</button>
            {nintendoAmiibo === undefined ? <h3>Choose your Amiibo</h3> : <AmiiboTable name={nintendoAmiibo.name} gameSeries={nintendoAmiibo.gameSeries} amiiboSeries={nintendoAmiibo.amiiboSeries}></AmiiboTable>}
            {nintendoAmiibo === undefined ? '' : <img src={nintendoAmiibo.image}></img>}
        </div>
    )
}