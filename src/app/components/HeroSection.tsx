import styles from "./HeroSection.module.css"

export function HeroSection() {
    return (
        <div>
            <h1 className={styles.title}>Song of the Summer</h1>
            <p>Welcome to Song of the Summer! Here you can compete with you friends to see who listens to music the most!</p>
            { /*<img src="" alt="" /> */}
        </div>
    );
}

export default HeroSection;