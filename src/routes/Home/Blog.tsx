import { Card, Col, Image, Row } from 'antd'
import React, { Fragment, } from 'react'

export default function Blog() {

    return (
        <Fragment>
            <Row gutter={20} justify="space-evenly" style={{ marginTop: '10vh', marginLeft: '10%', marginRight: '10%' }}>
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
                        Saya memulai karir sebagai Software Engineer sejak lulus kuliah pada 2018. Spesialisasi saya di bidang Website Development
                        Saya juga berpengalaman sebagai Full Stack Developer ( Front end developer, Back end developer dan Data analyst).
                        Project terbaru yang saat saya kerjakan saat ini adalah membuat Data Visualization yang effective dalam sebuah website Dashboard.
                        Untuk melihat skill bersertifikat saya silakan kunjungi profil <a href='https://www.linkedin.com/in/devi-kumala-b0459010b/' target='_blank'>LinkedIn</a> saya.
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
                        Menikah adalah moment terbesar yang ada pada hidup saya, saya sangat bersemangat dan gembira.
                        Bagaimana pun juga pernikahan membutuhkan banyak dana dan tenaga. Perencanaan keuangan untuk menikah sejak awal kerja sangat diperlukan.
                        Ini adalah awal dimana Budgeting (mengatur anggaran) menjadi passion saya.
                        Saya pernah membuat
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
                        Setelah menikah, tidak lama kemudian saya hamil. Masa hamil dan menjadi ibu adalah tantangan besar untuk saya. 
                        Tetapi karena dukungan suami dan keluarga, hamil menjadi pengalaman indah yang tak terlupakan. 
                        Saya sangat bersemangat saat mempersiapkan <a href=''>Daftar barang kehamilan</a>, <a href=''>Daftar barang bayi newborn</a>, dan <a href=''>Souvenir bayi satu bulan</a>.

                    </p>
                </Col>
            </Row>
        </Fragment>
    )
}