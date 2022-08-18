import React, { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ROUTES } from "./config/ROUTES";
import Loading from "./modules/Components/Loading";
const HomePage = lazy(() => import('./modules/Pages/HomePage'))
const TodosPage = lazy(() => import('./modules/Pages/TodosPage'))
const CrudPage = lazy(() => import('./modules/Pages/CrudPage'))
const LoadMorePage = lazy (() => import('./modules/Pages/LoadMorePage'))
export const CustomRoutes = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path={ROUTES.home} element={<HomePage />}/>
                    <Route path={ROUTES.todos} element={<TodosPage />}/>
                    <Route path={ROUTES.crud} element={<CrudPage/>}/>
                    <Route path={ROUTES.loadmore} element={<LoadMorePage/>}/>
                </Routes>
            </Router>
        </Suspense>
    )
}