import React from 'react';
import NotFound from './Page/NotFound';
import NewContent from './Page/NewContent';
import News from './Page/News';
import HomeCourses from './Page/Course/HomeCourses';
import DetailCourse from './Page/Course/DetailCourse';
import Golearning from '././Page/Course/Golearning';
const routes = [  
    {
        path : '/home/introduce',
        exact : true ,
        main : () => <News/>
    },
    {
        path : `/home/detailCourse/:id`,
        exact : false ,
        main : ({match,history}) => <DetailCourse match={match} history={history}/>
    },
    {
        path : `/home/golearning/:id`,
        exact : false ,
        main : ({match,history}) => <Golearning match={match} history={history}/>
    },
    {
        path : '/new/Detail/:id',
        exact : false ,
        main : ({match,history}) => <NewContent match={match} history={history}/>
        
    },
     
    {
        path : '/home/courses',
        exact : false ,
        main : () => <HomeCourses/>
        
    },
    {
        path : '/home/competitions',
        exact : false ,
        main : () => <NewContent/>
        
    },
    {
        path : '/home/news',
        exact : false ,
        main : ({history}) => <News history={history}/>
        
    },
    {
        path : '',
        exact : false ,
        main : () =><NotFound/>
        
    },
];


export default routes;