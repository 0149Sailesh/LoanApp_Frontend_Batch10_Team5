import Button from 'react-bootstrap/Button';
import styles from './style.module.css'
import Modal from 'react-bootstrap/Modal';
function LocalModel({childComponent,heading}) {
    return (
        <div
            className={`${styles.main} modal show`}

        >
            <div className={styles.body}>
                <div closeButton className={styles.head}>
                    <Modal.Title>{heading}</Modal.Title>
                </div>

                <div className={styles.modelBody}>
                  {childComponent()}


                </div>

            </div>
        </div>
    );
}

export default LocalModel;