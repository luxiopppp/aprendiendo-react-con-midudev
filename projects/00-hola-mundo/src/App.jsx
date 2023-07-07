import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'lucio.lucistico',
        name: 'Lucio Schraier',
        isFollowing: false
    },
    {
        userName: 'laraagordillo',
        name: 'Lara Gordillo',
        isFollowing: false
    },
    {
        userName: 'flores.del.mal_',
        name: 'Pedro Rozenmacher',
        isFollowing: false
    },
    {
        userName: 'notnahu.roa',
        name: 'Nahuel Roa',
        isFollowing: false
    },
    {
        userName: 'chofaasimoni',
        name: 'Sofía Simoni',
        isFollowing: false
    },
    {
        userName: 'santi.bottazzi',
        name: 'Santino Bottazzi',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}