import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home'));
const Day1Page = lazy(() => import('../pages/day1'));
const Day2Page = lazy(() => import('../pages/day2'));
const Day3Page = lazy(() => import('../pages/day3'));
const Day4Page = lazy(() => import('../pages/day4'));
const Day5Page = lazy(() => import('../pages/day5'));
const Day6Page = lazy(() => import('../pages/day6'));

export const routes =[
    {
        path: '/',
        element: <HomePage />,
        exact: true,
    },
    {
        path: '/day1',
        element: <Day1Page />,
    },
    {
        path: '/day2',
        element: <Day2Page />,
    },
    {
        path: '/day3',
        element: <Day3Page />,
    },
    {
        path: '/day4',
        element: <Day4Page />,
    },
    {
        path: '/day5',
        element: <Day5Page />,
    },
    {
        path: '/day6',
        element: <Day6Page />,
    }
]