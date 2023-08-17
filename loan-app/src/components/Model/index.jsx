import Button from 'react-bootstrap/Button';
import styles from './style.module.css'
import Modal from 'react-bootstrap/Modal';
function LocalModel({childComponent,closeModel}) {
    return (
        <div
            className={`${styles.main} modal show`}

        >
            <div className={styles.body}>
                <div closeButton className={styles.head}>
                    <Modal.Title>Modal title</Modal.Title>
                </div>

                <div className={styles.modelBody}>
                  {childComponent()}


                </div>

            </div>
        </div>
    );
}

export default LocalModel;