import * as actionTypes from "./actionTypes"

const initicalState: ArticleState = {
    articles: [
        {
            id:1,
            title: "post 1",
            body: "body 1"
        },
        {
            id:2,
            title: "post 2",
            body: "body 2"
        },
    ],
}

const reducer = (
    state: ArticleState = initicalState,
    action: ArticleAction
    ): ArticleState => {
        switch (action.type)
        {
            case actionTypes.ADD_ARTICLE:
                const newArticle: IArticle = {
                    id: Math.random(), //not really unique
                    title: action.article.title,
                    body: action.article.body,
                }
                return {
                    ...state,
                    articles: state.articles.concat(newArticle),
                }

            case actionTypes.REMOVE_ARTICLE:
                    const updatedArticles: IArticle[] = state.articles.filter(
                        article => article.id !== action.article.id
                    )
                    return {
                        ...state,
                        articles: updatedArticles,
                    }
        }
        return state
    }

    export default reducer