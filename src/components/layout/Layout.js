import layclass from './Layout.module.css';
import FirstNavigation from './FirstNavigation';

function Layout(props) {
    return (
        <div>
            <FirstNavigation />
            <main className={layclass.main}>
                {props.children}
            </main>
        </div>
    );

}

export default Layout;