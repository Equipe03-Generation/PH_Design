import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Grupos from '../../../models/Grupos';

function ListaGrupos() {
  const [grupos, setGrupos] = useState<Grupos[]>([])
  let navigate = useNavigate();

  async function getGrupos(){
    await busca("/grupos/all", setGrupos)
  };

  useEffect(() => {

    getGrupos()

   }, [grupos.length]);
  
   return (
    <>
    <Grid container className= 'displayflex'>
      {
        grupos.map(grupos => (
          <Box m={1} className='caixalistapost'>
            <Card variant="outlined" className='papelpost'>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className='cordefundo'>
                  Grupo
                </Typography>
                <Typography variant="h5" component="h2">
                  {grupos.numeroGrupo}
                </Typography>
                <Typography variant="body2" component="p">
                  {grupos.maisInfos}
                </Typography>
              </CardContent>
            </Card>
          </Box>

        ))
      } 
       </Grid>
    </>
  )
}

export default ListaGrupos;

