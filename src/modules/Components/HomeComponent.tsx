import React from "react";
import { Img } from "../../models/data";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, FormControl, InputLabel, OutlinedInput } from '@mui/material';

const HomeComponent = () => {
    const _ = require('lodash')
    const [datasFromApi, setDatasFromApi] = React.useState<Img[]>();
    const [datas, setDatas] = React.useState<Img[]>();
    const [datasClone, setDatasClone] = React.useState<Img[]>();
    const loadData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const datas = await res.json()
        setDatasFromApi(datas)
    }
    React.useEffect(() => {
        loadData();
        setDatas(datasFromApi?.slice(0, 10))
        const datasClone = _.cloneDeep(datas)
        setDatasClone(datasClone)
    }, [datasFromApi])

    const handleChange = (id : number, value : string) =>{
    }
    return (
        <>
            <div className='btn-container' style={{display : 'flex', justifyContent : 'center'}}>
                <Button variant="contained" color="success" sx={{margin : '10px'}}>
                    Save
                </Button>
                <Button variant="outlined" sx={{margin : '10px'}}>
                    Clear
                </Button>
            </div>
            {datasClone?.map((data) => {
                return (
                    <div key={data.id}>
                        <Card sx={{ maxWidth: 400, margin: '10px auto' }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={data.thumbnailUrl}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Picture {data.id}
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }}>
                                        <InputLabel>Title</InputLabel>
                                        <OutlinedInput
                                            id='outlined'
                                            multiline
                                            maxRows={5}
                                            value={data.title}
                                            onChange={(e)=>{
                                                handleChange(data.id, e.target.value)
                                            }}
                                        />
                                    </FormControl>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                )
            })}
        </>
    )
}

export default HomeComponent;