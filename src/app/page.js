import styles from './page.module.css'
import classes from '../styles/homePage.module.css'
import Head from "next/head";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Тестовое задание</title>
        <meta
          name="description"
          content="Выполнение тестового задания на базе Next.js"
          key="desc"
        />
      </Head>
      <div>
        <Navbar />
        <h2>Тестовое задание</h2>
        <p>
          Task Description:
          Требуется разработать API сервис для хранения пользователей
          - Сервис должен быть организован по принципу REST API
          - Пароли хэшировать на стороне сервера при создании пользователя
          - Заложить структуру проекта (директории routes, services, etc.)
          - Эндпоинты хранить в суб-роутерах
          - Миграции (alembic)
          - Использовать pipenv
          - Сервис должен иметь CRUD-функции для работы с пользователями
          - CRUD-функции делать классом и вообще использовать ООП
          - Для запросов к сервису и ответов использовать JSON
          - Система должна быть отзывчива и производительна
          - Сервис должен хранить информацию о пользователях в БД (SQLite не использовать!) и выполнять запросы при помощи ORM(использовать такие поля для хранения пользователей: id, username, email. password, register_date).
          - Покрыть код тестами (pytest)
          - Использовать асинхронность (async/await)
          Technical requirements
          Требуется разработать следующие api эндпоинты:
          - POST /user
          - GET /user/user-id
          - PUT /user/user-id
          - PATCH /user/user-id
          - DELETE /user/user-id
          - GET /user-list
          - Сервис требуется реализовать при помощи fastapi и любой поддерживаемой им ORM (sql, nosql база даннх на выбор, кроме SQLite)
          - Весь стек должен запускаться через docker-compose
        </p>
      </div>
    </main>
  )
}
