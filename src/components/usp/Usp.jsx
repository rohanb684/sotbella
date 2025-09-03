import { motion } from "motion/react";

import styles from "./Usp.module.css";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaBoxesPacking } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";

const cardData = [
  {
    icon: <MdOutlineAssignmentReturn />,
    header: "7-Day Easy Returns",
    para: "Enjoy hassle-free returns within 7 days for a stress-free shopping experience.",
  },
  {
    icon: <RiCustomerService2Line />,
    header: "24/7 Customer Support",
    para: "Our support team is available around the clock to assist you anytime, anywhere.",
  },
  {
    icon: <FaBoxesPacking />,
    header: "Premium Quality",
    para: "We deliver the highest quality products for your comfort and satisfaction.",
  },
  {
    icon: <CiDeliveryTruck />,
    header: "Secure & Fast Delivery",
    para: "Shop confidently with secure payments and fast delivery to your doorstep.",
  },
];

const Card = ({ data, index }) => {
  const { icon, para, header } = data;
  return (
    <motion.div
      className={styles.card}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={styles.cIcon}>{icon}</div>
      <h2 className={styles.cHeader}>{header}</h2>
      <p className={styles.cPara}>{para}</p>
    </motion.div>
  );
};

const Usp = () => {
  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // 👈 runs only once
    >
      <div className={styles.wrapper}>
        {cardData.map((val, i) => (
          <Card data={val} index={i} key={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default Usp;
