export const resume = {
    name: "Adesh Mahure",
    title: "AWS DevOps Engineer",
    summary:
        "Dedicated to optimization experienced DevOps Engineer understands the melding of operations and development to quickly deliver code to customers. Has experience with the Cloud and monitoring processes as well as DevOps development in all system.",
    highlights: [
        "AWS",
        "Git, Github and BitBucket",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "SonarQube",
        "Grafana and Prometheus",
    ],
    career: [
        {
            company: "The Algorithm",
            role: "DevOps Engineer",
            dates: "May 2025 - Present",
            location: "Remote",
            bullets: [
                "Designed and implemented CI/CD pipelines using Jenkins, automating build, test, and deployment workflows with integrated quality gates and environment-specific configurations to ensure reliable and repeatable releases.",
                "Containerized applications using Docker and managed deployments, optimizing image sizes, improving consistency across environments, and enabling scalable, isolated services.",
                "Configured and maintained NGINX as a reverse proxy and load balancer, improving application availability, security, and request handling with SSL termination and optimized routing rules.",
                "Implemented application and infrastructure monitoring using Prometheus and Grafana, creating custom metrics, dashboards, and alerts to proactively detect issues and improve system observability.",
            ],
        },
        {
            company: "Roots Innovation Labs Pvt.Ltd (aiqod.com)",
            role: "DevOps Engineer",
            dates: "Jan 2023 - Oct 2024",
            location: "Remote",
            bullets: [
                "Managed source code repositories using Git and Bitbucket, enforcing branching strategies, pull request workflows, and code review policies to ensure version control consistency and collaboration across teams.",
                "Integrated SonarQube into CI pipelines, enforcing code quality standards, identifying security vulnerabilities, and reducing technical debt through automated static code analysis.",
                "Configured and maintained PM2 process manager for Node.js applications, ensuring high availability, zero-downtime restarts, and efficient resource utilization in production environments.",
                "Integrated Snyk into CI/CD pipelines, continuously scanning dependencies and container images for vulnerabilities and enforcing security best practices throughout the development lifecycle.",
            ],
        },
    ],
    education: [
        {
            school: "Bajaj Institute of Technology, Wardha",
            degree: "Civil Engineer",
            dates: "July 2018 - Aug 2022",
            details: ["Cumulative GPA: 8.27/10"],
        },
        {
            school: "Higher Secondary (12th)",
            degree: "Maharashtra State Board",
            dates: "2017 - 2018",
            details: ["Percentage: 61.24%"],
        },
    ],
    skills: {
        categories: [
            {
                name: "AWS and DigitalOcean",
                items: ["EC2", "VPC", "Autoscaling", "ALB", "S3", "EBS", "IAM", "R53", "Cloudwatch"],
            },
            {
                name: "DevOps",
                items: ["Github", "BitBucket", "Jenkins", "Docker", "Kubernetes", "Grafana and Prometheus", "SonarQube and Snyk", "Nginx", "Shell Scripting", "Nexus",  "PM2"],
            },
            {
                name: "Operating Systems",
                items: ["RHEL", "Ubuntu", "CentOS", "Windows"],
            },
            {
                name: "Databases",
                items: ["MongoDB", "SQL", "PostgreSQL"],
            },
        ],
    },
    projects: [
        {
            name: "RI (Pharma)",
            description:
                "Managed and automated AWS infrastructure using EC2, AMI, EBS, EFS, and Security Groups via AWS CLI and Console, supporting secure and scalable deployments. Handled production operations, Linux server management, monitoring with CloudWatch, and CI/CD pipelines using Jenkins for Node.js and Python applications. Configured NGINX for load balancing, containerized applications with Docker, automated deployments using Ansible, and enforced security through firewall management, backups, and patching to ensure high availability and system stability.",
            tech: ["AWS", "Docker", "PM2", "npm", "Linux", "Jenkins"],
        },
        {
            name: "AI-Access",
            description:
                "Implemented Docker and Kubernetes for containerized application deployment, scaling, and orchestration, ensuring high availability and efficient resource utilization. Automated AWS infrastructure using Terraform with reusable modules for EC2, S3, and VPC, and monitored system health using CloudWatch. Optimized load balancing, managed MongoDB performance with backups and query tuning, maintained secure remote access, and built CI/CD pipelines integrating Git, GitHub, Maven, Jenkins, and Ansible to streamline deployments.",
            tech: ["docker", "K8S", "SonarQube and Snyk", "Grafana and Prometheus", "Jenkins", "MongoDB", "Terraform"],
        },
    ],
    contact: {
        email: "adeshmahure1970@gmail.com",
        phone: "+91 9075740984",
        location: "Wardha, Maharashtra, India",
        linkedin: "https://www.linkedin.com/in/adesh-mahure-49a745249/",
        website: "https://www.adeshmahure.online/",
        otherLinks: [],
    },
};

export type Resume = typeof resume;
