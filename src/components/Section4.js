import one from '../images/c1.jpg'
import two from '../images/c2.jpg'
import three from '../images/c3.jpg'
import four from '../images/c4.jpg'
function Section4() {
    return (
        <div>
            <div className="mainn">
                <h1>Recommended for you</h1>
                <p>pick the best fit</p>
            </div>
            <div className="main4">


                <div className="main4_1">
                    <img src={one}/>
                        <h3>2023 Python Data Visualization MasterclassName</h3>
                        <p>col steel</p>
                        <p>4.8 <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> <i className="fa-solid fa-star"
                            style={{ color: '#FFD43B' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> <i
                                className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                        <p><i className="fa-solid fa-indian-rupee-sign" style={{color: '#1f1f1f'}}></i>449 <del>1999</del></p>
                </div>

                <div className="main4_1">
                    <img src={two}/>
                        <h3>2023 Python Data Visualization MasterclassName</h3>
                        <p>col steel</p>
                        <p>2.8 <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> <i className="fa-solid fa-star"
                            style={{ color: '#FFD43B' }}></i></p>
                        <p><i className="fa-solid fa-indian-rupee-sign" style={{color: '#1f1f1f'}}></i>449 <del>1999</del></p>
                </div>

                <div className="main4_1">
                    <img src={three}/>
                        <h3>2023 Python Data Visualization MasterclassName</h3>
                        <p>col steel</p>
                        <p>4.0<i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> <i className="fa-solid fa-star"
                            style={{ color: '#FFD43B' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> <i
                                className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                        <p><i className="fa-solid fa-indian-rupee-sign" style={{color: '#1f1f1f'}}></i>449 <del>1999</del></p>
                </div>

                <div className="main4_1">
                    <img src={four}/>
                        <h3>2023 Python Data Visualization MasterclassName</h3>
                        <p>col steel</p>
                        <p>3.8 <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i> <i className="fa-solid fa-star"
                            style={{ color: '#FFD43B' }}></i> <i className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i></p>
                        <p><i className="fa-solid fa-indian-rupee-sign" style={{color: '#1f1f1f'}}></i>449 <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Section4