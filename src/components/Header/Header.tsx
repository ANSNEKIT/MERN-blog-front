import { FC } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import styles from './header.module.scss'

const Header: FC = () => {
    const isAuth = false
    const logoutHandler = () => {}

    return (
        <div className={styles.header}>
            <Container maxWidth="xl" fixed>
                <div className={styles.headerWrap}>
                    <a className={styles.headerLogo} href="/">
                        <div>гряди́ и ви́ждь</div>
                    </a>
                    <div className={styles.headerButtons}>
                        {isAuth ? (
                            <>
                                <a href="/posts/create">
                                    <Button variant="contained" size="large">
                                        Написать статью
                                    </Button>
                                </a>
                                <Button onClick={logoutHandler} variant="contained" color="error" size="large">
                                    Выйти
                                </Button>
                            </>
                        ) : (
                            <>
                                <a href="/login">
                                    <Button variant="outlined" size="large">
                                        Войти
                                    </Button>
                                </a>

                                <a href="/register">
                                    <Button variant="contained" size="large">
                                        Зарегистрироваться
                                    </Button>
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
