export interface ISensor {
    sensorId: number;
    name: string;
    containerId?: number;
}

export interface ISensorWithReading extends ISensor {
    reading: any;
}