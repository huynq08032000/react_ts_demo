import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Img } from "../../models/data";

const LoadMoreComponent = () => {

    const [datas, setDatas] = useState<Img[]>([])
    const [page, setPage] = useState(1)
    const loadData = useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=16`)
            .then((res) => {
                if (res.status === 200) setDatas(res.data)
                else throw new Error('Load fail')
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <Grid container spacing={3} sx={{padding : '20px'}}>
            {datas && datas.map((data: Img) => {
                return (
                    <Grid item lg={3} md={4} sm={6} key={data.id}>
                        <Card sx={{ maxWidth: 345 }}>
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
                                <Typography variant="body2" color="text.secondary">
                                    {data.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default LoadMoreComponent;
