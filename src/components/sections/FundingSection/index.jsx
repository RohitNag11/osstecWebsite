import { StatCard } from "@/components/cards";
import styles from './FundingSection.module.scss';

export function FundingSection({ data }) {
    // Calculate the total value
    const totalValue = data.reduce((acc, stat) => acc + stat.value, 0);

    // Calculate the flexGrow value for each card
    const getFlexGrowForCard = (value) => {
        return value / totalValue;
    }

    return (
        <div className={styles.statsContainer}>
            {data.map((stat, index) => (
                <div key={index} style={{ flexGrow: getFlexGrowForCard(stat.value) }}>
                    <StatCard
                        progressAlignment={index % 2 === 0 ? 'left' : 'right'}
                        {...stat}
                    />
                </div>
            ))}
        </div>
    );
}