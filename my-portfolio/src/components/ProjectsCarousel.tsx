"use client"; 

import { Project } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
    return ( 
        <div className="relative px-4 py-8">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 },
                    1280: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: true}}
                loop
                centeredSlides
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id} className="py-6">
                        <div className="sale-90 hover:scale-95 transition-transform duration-300">
                            <ProjectCard
                                project={project}
                                className="h-full mb-5"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
