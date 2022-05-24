import React from 'react';

const Banner = () => {
    return (
        <section className='w-full mt-5 border-2 border-black'>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/asian-male-engineer-specialist-with-measuring-machine-with-manipulator-armthreedimensional-coordinate-measurement-check-sizes-3d-check-sizes-parts-cmm-after-machining-process_609648-162.jpg?w=996&t=st=1653408409~exp=1653409009~hmac=41fffcce9f2c817442c40ec97dce9c3600efe280dd3827e63d49bbea7638e835" class="w-full" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8859.jpg?w=996&t=st=1653408389~exp=1653408989~hmac=4f0b144e8d9d69292d297a0b105dc8f1d770316ee0c86ca77516f732ab8d511b" class="w-full" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-16058.jpg?w=996&t=st=1653408376~exp=1653408976~hmac=a561043acbefcf45cacbd44a74ad7d223aaea3efc6e630519c35e162fb167e2f" class="w-full" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.jpg?w=996&t=st=1653408359~exp=1653408959~hmac=45bd1758a97bbdd477efe8cab026a2c10943efe8fe5b1835dc50bd6f17359e95" class="w-full" alt='' /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;