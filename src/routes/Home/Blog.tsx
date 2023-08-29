import { Card, Col, Image, Row } from 'antd'
import React, { Fragment, } from 'react'

export default function Blog() {

    return (
        <Fragment>
            <Row gutter={20} justify="space-evenly" style={{ marginTop: '20px' }}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                    <Card className='homecard' style={{ backgroundColor: '#ffb8b1' }}>
                        <Image
                            src={"/images/working-brief-case.svg"}
                            alt={"tas kantor"}
                            width={'70%'}
                            preview={false}
                        />
                    </Card>
                    <h3 style={{ fontWeight: 'bolder', textAlign: 'center' }}>
                        <a href='/blogs/karir' style={{ color: 'black' }}>Karir</a>
                    </h3>
                    <p>
                        Saya adalah full time Software Engineer sejak 2018 dan berspesialisai di bidang Website Development.
                        Lihat profil dan sertifikat saya di <a href='https://www.linkedin.com/in/devi-kumala-b0459010b/' target='_blank'>LinkedIn</a>.
                    </p>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                    <Card className='homecard' style={{ backgroundColor: '#f2f2f2' }}>
                        <Image
                            src={"/images/ring-engagement.svg"}
                            alt={"cincin tunangan"}
                            width={'70%'}
                            preview={false}
                        />
                    </Card>
                    <h3 style={{ fontWeight: 'bolder', textAlign: 'center' }}>
                        <a href='/blogs/pernikahan' style={{ color: 'black' }}>Pernikahan</a>
                    </h3>
                    <p>
                        Salah satu momen besar dalam hidup banyak orang. Rencanakan dengan matang: 
                        <a href='/blogs/pernikahan/'> Budget untuk sangjit</a>,
                        <a href='/blogs/pernikahan/'> Budget untuk pernikahan</a>,
                        <a href='/blogs/pernikahan/'> Budget untuk rumah pengantin baru</a>,
                        <a href='/blogs/pernikahan/'> Budget untuk Bridal Shower </a>, DIY souvenir untuk
                        <a href='/blogs/pernikahan/'> Souvenir Sangjit</a>, dan <a href=''>Hampers Bridemaid</a>.
                    </p>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} style={{ marginBottom: '10vh' }}>
                    <Card className='homecard' style={{ backgroundColor: '#f33a6a' }}>
                        <Image
                            src={"/images/pregnant.svg"}
                            alt={"hamil"}
                            width={'70%'}
                            preview={false}
                        />
                    </Card>
                    <h3 style={{ fontWeight: 'bolder', textAlign: 'center' }}>
                        <a href='/blogs/ibu-dan-bayi/' style={{ color: 'black' }}>Ibu & Bayi</a>
                    </h3>
                    <p>
                        Masa hamil dan menjadi ibu adalah pengalaman yang tak terlupakan. 
                        Siapkan kehadiran bayi dengan menyusun <a href=''>Daftar barang kehamilan</a>, <a href=''>Daftar barang bayi newborn</a>, dan <a href=''>Souvenir bayi satu bulan</a>.

                    </p>
                </Col>
            </Row>
        </Fragment>
    )
}