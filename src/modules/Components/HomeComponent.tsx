import React from "react";
import { Img } from "../../models/data";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, FormControl, InputLabel, OutlinedInput } from '@mui/material';

const HomeComponent = () => {
    const _ = require('lodash')
    const axios = require('axios');
    const [datasFromApi, setDatasFromApi] = React.useState<Img[]>([]);
    const [datas, setDatas] = React.useState<Img[]>([]);
    const [datasClone, setDatasClone] = React.useState<Img[]>([]);
    React.useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/photos')
            .then((res: any) => {
                if (res.status == 200) {
                    setDatasFromApi(res.data)
                    setDatas(res.data.slice(0, 10))
                    setDatasClone(res.data.slice(0, 10))
                }
            })
            .catch((err: any) => {
                console.log(err)
            })
    },[])

    const handleChange = (id: number, value: string) => {
        const newDataClone = _.cloneDeep(datasClone)
        if (newDataClone) {
            const index = newDataClone.findIndex((el : any) => el.id === id)
            newDataClone[index].title = value
            setDatasClone([...newDataClone])
        }
    }
    const handleSave = () => {
        const dataSave = _.cloneDeep(datasClone)
        setDatas(dataSave)
    }
    const handleClear = () => {
        const dataClear = _.cloneDeep(datas)
        setDatasClone(dataClear)
    }
    return (
        <>
            <div className='btn-container' style={{ display: 'flex', justifyContent: 'center'}}>
                <Button variant="contained" color="success" sx={{ margin: '10px' }} onClick={handleSave}>
                    Save
                </Button>
                <Button variant="outlined" sx={{ margin: '10px' }} onClick={handleClear}>
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
                                            onChange={(e) => {
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