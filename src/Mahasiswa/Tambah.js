import React from 'react'
import {View, Text} from 'react-native'
import Tombol from './../form/Tombol'
import Input from './../form/Input'
import Container from './../form/Container'
import MahasiswaModel from './../models/MahasiswaModel'

const mahasiswaModel = new MahasiswaModel()

export default ({route, navigation}) => {
    const [nim, setNim] = React.useState('')
    const [nama, setNama] = React.useState('')
    return (
        <Container>
            <Input onChangeText={(text)=>{setNim(text)}} value={nim} tipe="numeric" placeholder="Masukkan NIM" />
            <Input onChangeText={(text)=>{setNama(text)}} value={nama} placeholder="Masukkan Nama" />
            <Tombol title="Simpan" onPress={()=>{
                mahasiswaModel.create({nim, nama}).then(res=>alert('Mahasiswa berhasil disimpan')).then(()=>{
                    setNim('')
                    setNama('')
                    navigation.goBack()
                })
            }}/>
        </Container>
    )
}