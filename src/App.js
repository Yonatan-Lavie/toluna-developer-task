import React, { useEffect  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionAnswerPage from './pages/QuestionAnswerPage'
import { connect } from 'react-redux'
import { changeLayout } from './redux/actions';
import {getLayout} from './redux/selectors'


const App = ({layout, onChangeLayout}) => {

  useEffect(() => { 
    updateDimensions()
    window.addEventListener("resize", updateDimensions);
    
    return () => window.removeEventListener("resize",updateDimensions);
   }, [layout])
  const updateDimensions = () => {


    if(window.innerWidth <= 768 && layout === "desktop"){
      onChangeLayout("mobile");
    }
    else if(window.innerWidth > 768 && layout === "mobile"){
      onChangeLayout("desktop")
    }
  }
  return (
    <>
    <QuestionAnswerPage />
    </>
  );
}

const mapStateToProps = (state) => ({
  layout: getLayout(state),
})

const mapDispatchToProps = (dispatch) => ({
    onChangeLayout: (layoutMode) => dispatch(changeLayout(layoutMode)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(App)

